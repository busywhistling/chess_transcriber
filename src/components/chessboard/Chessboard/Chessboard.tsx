// Third-party imports
// import { useSelector } from "react-redux";
import { Chess, Square } from "chess.js";
import { motion } from "framer-motion";

// Global imports
// import { selectBoard, selectHighlights } from "@/redux/chessboardSlice";

// Local imports
import Tile from "@/components/chessboard/Tile";
import { chessboardPositions } from "./chessboardPosition";
import { useState } from "react";
import { false8x8Matrix, isTypeMove, parsePosition } from "./utils";

////////////////////////////////////////////////////////////////////////////////
interface ChessboardProps {
	game: Chess;
	setGame: (chess: Chess) => void;
	freshGame: boolean;
	setFreshGame: any;
	inputAllowed: boolean;
	step: number;
	setStep: (n: number) => void;
}

const Chessboard = ({
	game,
	setGame,
	freshGame,
	setFreshGame,
	inputAllowed,
	step,
	setStep,
}: ChessboardProps) => {
	const [highlightedTiles, setHighlightedTiles] = useState(false8x8Matrix());
	const [selectedTile, setSelectedTile] = useState("");
	const [capturedWPieces, setCapturedWPieces] = useState([] as string[]);
	const [capturedBPieces, setCapturedBPieces] = useState([] as string[]);

	if (freshGame) {
		setGame(new Chess());
		// setCapturedBPieces([] as string[]);
		// setCapturedWPieces([] as string[]);
		// console.log("Freshened up ");
		setFreshGame(false);
	}
	const board = game.board();

	// note the ordering of xCoordinate and yCoordinate below
	const getPieceImageFilename = (xCoordinate: number, yCoordinate: number) =>
		board[yCoordinate][xCoordinate] === null
			? undefined
			: `${board[yCoordinate][xCoordinate].type}_${board[yCoordinate][xCoordinate].color}`;
	const isTileHighlighted = (xCoordinate: number, yCoordinate: number) =>
		highlightedTiles[yCoordinate][xCoordinate];

	const handleMove = (position: string, isPositionHighlighted: boolean) => {
		if (!isPositionHighlighted) {
			setHighlightedTiles(false8x8Matrix());
			setSelectedTile(position);
			const movesPossible = game.moves({ square: position as Square, verbose: true });
			const tempHighlightedTiles = false8x8Matrix();
			movesPossible.forEach(move => {
				if (isTypeMove(move)) {
					const [i, j] = parsePosition(move.to);
					tempHighlightedTiles[7 - j][i] = true;
				}
			});
			setHighlightedTiles(tempHighlightedTiles);
		} else {
			// not exactly creating a new copy
			const newGame = game;
			const event = newGame.move({ from: selectedTile as Square, to: position });
			if (event?.captured) {
				if (event.color === "b") {
					setCapturedWPieces(capturedWPieces.concat([(event.captured as string) + "_w"]));
				} else {
					setCapturedBPieces(capturedBPieces.concat([(event.captured as string) + "_b"]));
				}
			}
			setHighlightedTiles(false8x8Matrix());
			setSelectedTile(""); // not necessary as now it's opponent's turn
			inputAllowed && setGame(newGame);
			setStep(step + 1);
			// remember that useState is asynchronous, so setting the game above doesn't necessarily output the notation
		}
	};

	return (
		// container div to show wooden border
		<div className="boardContainer">
			<div id="capturedWPieces">
				{capturedWPieces.map(piece => (
					<div className="fallenPieceTile">
						<div
							style={{ backgroundImage: `url(${piece}.png)` }}
							className="fallenPiece"></div>
					</div>
				))}
			</div>
			<div id="chessboard">
				{chessboardPositions.map(({ label, xCoordinate, yCoordinate, tileColor }) => (
					<Tile
						key={label}
						position={label}
						tileColor={tileColor}
						piece={getPieceImageFilename(xCoordinate, yCoordinate)}
						isHighlighted={isTileHighlighted(xCoordinate, yCoordinate)}
						handleMove={inputAllowed ? handleMove : undefined}
					/>
				))}
			</div>
			<div id="capturedBPieces">
				{capturedBPieces.map(piece => (
					<div className="fallenPieceTile">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							style={{ backgroundImage: `url(${piece}.png)` }}
							className="fallenPiece"></motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Chessboard;
