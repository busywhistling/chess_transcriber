// Third-party imports
import { useDispatch } from "react-redux";

// Global imports
import { handleMove } from "@/redux/chessboardSlice";

// Local imports

////////////////////////////////////////////////////////////////////////////////

export interface TileProps {
	position: string;
	piece?: string;
	tileColor: string;
	isHighlighted?: boolean;
	inputAllowed: boolean;
}

const Tile = ({ position, piece, tileColor, isHighlighted, inputAllowed }: TileProps) => {
	const dispatch = useDispatch();
	return (
		<div
			className={"tile " + tileColor + "-tile " + (isHighlighted ? "highlight" : "")}
			onClick={() => {
				if (inputAllowed) dispatch(handleMove([position, isHighlighted]));
			}}>
			{piece && (
				<div style={{ backgroundImage: `url(${piece}.png)` }} className="chesspiece"></div>
			)}
		</div>
	);
};

export default Tile;
