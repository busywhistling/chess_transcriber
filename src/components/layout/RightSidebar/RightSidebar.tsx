// Third-party imports
import { useSelector, useDispatch } from "react-redux";
import parse from "html-react-parser";
import { Chess } from "chess.js";

// Global imports
import "@/styles/App.scss";
import { loadPGN, selectMoves } from "@/redux/chessboardSlice";

// Local imports

////////////////////////////////////////////////////////////////////////////////

interface RightSidebarProps {
	selectedFeature: number;
	notation: string;
	setNotation: (s: string) => void;
	isWrongNotation: boolean;
	setIsWrongNotation: (s: boolean) => void;
	currentSelected: number; // holds the position of the current move being observed
	setCurrentSelected: (n: number) => void;
}

const RightSidebar = ({
	selectedFeature,
	notation,
	setNotation,
	isWrongNotation,
	setIsWrongNotation,
	currentSelected,
	setCurrentSelected,
}: RightSidebarProps) => {
	let stepHistory: string[] = [];
	// setCurrentSelected(hist.length - 1);
	const dispatch = useDispatch();

	function testChessnotation(notat: string) {
		// console.log(stepHistory[currentSelected])
		const chess = new Chess();
		if (chess.loadPgn(notat)) {
			setIsWrongNotation(false);
			dispatch(loadPGN(notat));
		} else setIsWrongNotation(true);
	}

	function interactiveHistory() {
		const newchess = new Chess();
		newchess.loadPgn(notation);
		const hist = newchess.history() as string[];
		stepHistory = [];
		let last = "";
		const list = [];
		for (let i = 0; i < hist.length; i++) {
			last = last + hist[i] + " ";
			stepHistory.push(last);
			// FIXME: setCurrentSelected doesn't seem to be setting the currentlySelected variable immediately and requires two clicks.
			list.push(
				<div
					key={i}
					className={currentSelected === i ? "current" : ""}
					onClick={() => {
						setCurrentSelected(i);
						testChessnotation(stepHistory[currentSelected]);
					}}>
					{hist[i]}
				</div>,
			);
		}
		return <div className="interactive-history">{list}</div>;
	}
	return (
		<div className="rightSidebar">
			{selectedFeature === 0 ? (
				<div>
					<p>
						Below you can find the algebraic notation incrementally being added for your
						moves.
						{/* Promotions are not handled because it requires
                        user input to select which piece you want. */}
					</p>
					<div className="chess-moves animate__fadeInRight">
						{parse(useSelector(selectMoves))}
					</div>
				</div>
			) : (
				<div>
					<fieldset>
						<legend>Enter SAN</legend>
						<p>
							Please enter your moves in algebraic notation in the input box below.
							Click on submit once you've done so.
						</p>
						<textarea
							id="san-input"
							rows={5}
							cols={28}
							name="SAN input"
							placeholder="Enter notation here"
							required
							onChange={e => {
								setNotation(e.target.value);
								setIsWrongNotation(false);
							}}></textarea>
						<br />
						<button onClick={() => testChessnotation(notation)}>Submit</button>
						{notation && isWrongNotation && (
							<div className="warning">Invalid input, try again.</div>
						)}
					</fieldset>
					<p>Here are your moves. Double click on the one you want to jump to.</p>
					{interactiveHistory()}
					{/* {currentSelected} <br />
                    Current step history is <br /> {stepHistory[currentSelected]}
                    {setCurrentSelected(2)} <br />
                    {load_pgn(stepHistory[currentSelected])} */}
				</div>
			)}
		</div>
	);
};

export default RightSidebar;
