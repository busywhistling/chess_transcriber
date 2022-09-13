// Third-party imports
import { useState } from "react";
import { Chess, Move } from "chess.js";

// Global imports
import "@/styles/App.scss";
import { Chessboard } from "@/components/chessboard";

// Local imports

////////////////////////////////////////////////////////////////////////////////

// User defined type guard, to ensure move is of type Move before accessing it's 'to' prop
function isTypeMove(move: string | Move): move is Move {
	return Object.prototype.hasOwnProperty.call(move, "to");
}

interface NotationToBoardProps {
	freshGame: boolean;
	setFreshGame: any;
}

const NotationToBoard = ({ freshGame, setFreshGame }: NotationToBoardProps) => {
	const [input, setInput] = useState("");
	const [invalidInput, setInvalidInput] = useState(false);
	const [game, setGame] = useState(new Chess());
	const [fixedGame, setFixedGame] = useState(new Chess());
	const [step, setStep] = useState(0); // FIXME: for some reason a dummy step update is required, to force state update here
	const [currentMove, setCurrentMove] = useState(0);

	const loadPgn = (notation: string) => {
		const newGame = game;
		newGame.loadPgn(notation);
		setGame(newGame);
		setStep(step + 1);
	};

	const tryInput = () => {
		const chess = new Chess();
		if (chess.loadPgn(input)) {
			const newGame = fixedGame;
			newGame.loadPgn(input);
			setFixedGame(fixedGame);
			loadPgn(input);
			setInvalidInput(false);
			setCurrentMove(fixedGame.history().length - 1);
		} else setInvalidInput(true);
	};

	const interactiveHistory = () => {
		// general history element is of form
		// { color: 'b', from: 'e5', to: 'f4', flags: 'c', piece: 'p', captured: 'p', san: 'exf4' }
		const history = fixedGame.history({ verbose: true });
		history.map((move, index) => {
			move["index"] = index;
		});
		// setCurrentMove(history.length - 1);
		const lastmoves = history.map(move => {
			const piece = move.piece + "_" + move.color;
			return (
				<div
					key={move.san}
					className={"lastmove " + (currentMove === move.index ? "current" : "")}
					onClick={() => {
						setCurrentMove(move.index);
						const historySoFar = fixedGame.history().slice(0, move.index + 1);
						// note that currentMove in place of move.index above doesn't work
						// as React doesn't immediately update state of currentMove
						loadPgn(historySoFar.join(" "));
						setStep(step + 1);
					}}>
					<p>{move.san}</p>
					<div
						className="movingPiece"
						style={{ backgroundImage: `url(${piece}.png)` }}></div>
				</div>
			);
		});
		return <div className="interactive-history">{lastmoves}</div>;
	};

	return (
		<div className="simulator">
			<Chessboard
				game={game}
				setGame={setGame}
				freshGame={freshGame}
				setFreshGame={setFreshGame}
				inputAllowed={false}
				step={step}
				setStep={setStep}
			/>
			<div className="rightSidebar">
				<fieldset>
					<legend>Enter SAN</legend>
					<p>
						Enter your moves in algebraic notation in the input box below. Click on
						submit once you've done so.
					</p>
					<textarea
						id="san-input"
						rows={5}
						cols={28}
						name="SAN input"
						placeholder="Enter notation here"
						required
						onChange={e => {
							setInput(e.target.value);
							setInvalidInput(false);
						}}></textarea>
					<br />
					<button onClick={() => tryInput()}>Submit</button>
					{input && invalidInput && (
						<div className="warning">Invalid input, try again.</div>
					)}
				</fieldset>
				<p>
					Here are your moves
					{currentMove > 0 ? ` (selected move: ${currentMove + 1})` : ""}.{" "}
				</p>
				{interactiveHistory()}
			</div>
		</div>
	);
};

export default NotationToBoard;
