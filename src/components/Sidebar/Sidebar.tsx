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
				<div className="title">Chess Transcriber</div>
				<div className="subtitle">Choose an option below</div>
				<div className="features">
					<div
						className={"feature " + (selectedFeature === 0 ? "selected-feature" : "")}
						onClick={() => {
							if (selectedFeature === 1) {
								setSelectedFeature(1 - selectedFeature);
								setFreshGame(true);
							}
						}}>
						<h3>Transcribe moves to algebraic notation</h3>
						<p className="feature-desc">
							Play a game on the adjacent chessboard, and obtain the corresponding Standard Algebraic Notation at the right (SAN is a method for recording and
							describing moves in a game of chess, recognized by the international
							chess governing body FIDE).
						</p>
					</div>
					<div
						className={"feature " + (selectedFeature === 1 ? "selected-feature" : "")}
						onClick={() => {
							if (selectedFeature === 0) {
								setSelectedFeature(1 - selectedFeature);
								setFreshGame(true);
							}
						}}>
						<h3>Play recorded notation of a game</h3>
						<p className="feature-desc">
							Enter the notation for a given game in an input box on the right. Walk
							through the game using the displayed controls (programmed logic
							ensures you can only input valid game notations).
						</p>
					</div>
				</div>
			</div>
			<Credits />
		</div>
	);
};

export default Sidebar;
