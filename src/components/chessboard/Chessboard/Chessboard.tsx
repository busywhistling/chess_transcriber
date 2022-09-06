// Third-party imports
import { useSelector } from 'react-redux';

// Global imports
import { selectBoard, selectHighlights } from '@/redux/chessboardSlice';

// Local imports
import Tile from "../Tile"
import { chessboardPositions } from './chessboardPosition';

////////////////////////////////////////////////////////////////////////////////

// const range = (n: number): number[] => [...Array(n).keys()]

interface ChessboardProps {
    inputAllowed: boolean
}

const Chessboard = ({ inputAllowed }: ChessboardProps) => {
    const board = useSelector(selectBoard);
    const highlights = useSelector(selectHighlights);

    const getPieceImageFilename = (xCoordinate: number, yCoordinate: number) => (
        board[xCoordinate][yCoordinate] == null
            ? undefined
            : `${board[xCoordinate][yCoordinate].type}_${board[xCoordinate][yCoordinate].color}`
    )
    const isTileHighlighted = (xCoordinate: number, yCoordinate: number) => highlights[xCoordinate][yCoordinate]

    return (
        <div className='boardContainer'>
            <div id='chessboard'>
                {chessboardPositions.map(({ label, xCoordinate, yCoordinate, tileColor }) => (
                    <Tile
                        key={label}
                        pos={label}
                        piece={getPieceImageFilename(xCoordinate, yCoordinate)}
                        tileColor={tileColor}
                        highlight={isTileHighlighted(xCoordinate, yCoordinate)}
                        inputAllowed={inputAllowed}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chessboard
