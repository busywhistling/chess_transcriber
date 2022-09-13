// Third-party imports
// import { useDispatch } from "react-redux";

// Global imports
// import { handleMove } from "@/redux/chessboardSlice";

// Local imports

////////////////////////////////////////////////////////////////////////////////

export interface TileProps {
	position: string;
	piece: string | undefined;
	tileColor: string;
	isHighlighted: boolean;
	handleMove?: any;
}

const Tile = ({ position, piece, tileColor, isHighlighted, handleMove }: TileProps) => {
	return (
		<div
			className={"tile " + tileColor + "-tile " + (isHighlighted ? "highlight" : "")}
			onClick={() => {
				handleMove && handleMove(position, isHighlighted);
			}}>
			{piece && (
				<div style={{ backgroundImage: `url(${piece}.png)` }} className="chesspiece"></div>
			)}
		</div>
	);
};

export default Tile;
