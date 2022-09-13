// Third-party imports
import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import parse from "html-react-parser";
import { motion } from "framer-motion";

// Global imports
import "@/styles/App.scss";
import { Chessboard } from "@/components/chessboard";

// Local imports

////////////////////////////////////////////////////////////////////////////////

interface BoardToNotationProps {
	freshGame: boolean;
	setFreshGame: any;
}

const BoardToNotation = ({ freshGame, setFreshGame }: BoardToNotationProps) => {
	const [game, setGame] = useState(new Chess());
	const [step, setStep] = useState(0); // FIXME: for some reason a dummy step update is required, to force state update here
	return (
		<div className="simulator">
			<Chessboard
				game={game}
				setGame={setGame}
				freshGame={freshGame}
				setFreshGame={setFreshGame}
				inputAllowed={true}
				step={step}
				setStep={setStep}
			/>
			<div className="rightSidebar">
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
					Below you can find the algebraic notation incrementally being added for your
					moves.
				</motion.p>
				<div className="chess-moves">
					{parse(game.pgn({ maxWidth: 5, newline: "<br />" }))}
				</div>
			</div>
		</div>
	);
};

export default BoardToNotation;
