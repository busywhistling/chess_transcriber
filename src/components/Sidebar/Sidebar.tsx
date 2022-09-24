// Third-party imports

// Global imports
import "@/styles/App.scss";
import { Credits } from "@/components";

// Local imports

////////////////////////////////////////////////////////////////////////////////

interface SidebarProps {
	selectedFeature: number;
	setSelectedFeature: (n: number) => void;
	setFreshGame: (b: boolean) => void;
}

const Sidebar = ({ selectedFeature, setSelectedFeature, setFreshGame }: SidebarProps) => {
	return (
		<div className="Sidebar">
			<div>
				<div className="title">Chess transcriber</div>
				<div className="subtitle">Select the feature you want to use below.</div>
				<div className="features">
					<div
						className={"feature " + (selectedFeature === 0 ? "selected-feature" : "")}
						onClick={() => {
							if (selectedFeature === 1) {
								setSelectedFeature(1 - selectedFeature);
								setFreshGame(true);
								// dispatch(resetChessboard());
								// setNotation("");
								// setIsWrongNotation(false);
								// setCurrentSelected(0);
							}
						}}>
						<h3>Transcribe moves to algebraic notation</h3>
						{/* Here is the description */}
						<p className="feature-desc">
							Standard Algebraic Notation (SAN) is a method for recording and
							describing moves in a game of chess, recognized by the international
							chess governing body FIDE. This app lets you play a game on the adjacent
							chessboard, and obtain the corresponding notation at the right.
						</p>
					</div>
					<div
						className={"feature " + (selectedFeature === 1 ? "selected-feature" : "")}
						onClick={() => {
							if (selectedFeature === 0) {
								setSelectedFeature(1 - selectedFeature);
								setFreshGame(true);
								// dispatch(resetChessboard());
							}
						}}>
						<h3>Play recorded notation of a game</h3>
						<p className="feature-desc">
							This feature lets you input the notation for a given game and walk
							through it using the controls provided on the right. Programmed logic
							makes sure you can only input valid game notations.
						</p>
					</div>
				</div>
			</div>
			<Credits />
		</div>
	);
};

export default Sidebar;
