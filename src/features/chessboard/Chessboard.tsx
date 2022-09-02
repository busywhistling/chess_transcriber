import { handleMove, selectBoard, selectHighlights } from './chessboardSlice';
import { useSelector, useDispatch } from 'react-redux';

const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const yAxis = [8, 7, 6, 5, 4, 3, 2, 1];

interface ChessboardProps {
    inputAllowed: boolean
}


export default function Chessboard({ inputAllowed }: ChessboardProps) {
    const board = useSelector(selectBoard);
    const highlights = useSelector(selectHighlights);
    let boardView = [];
    for (let i = 0; i < yAxis.length; i++)
        for (let j = 0; j < xAxis.length; j++) {
            let pos = xAxis[j] + yAxis[i];
            if (board[i][j])
                boardView.push(<Tile key={pos} pos={pos} piece={board[i][j].type + '_' + board[i][j].color} tileColor={(i + j) % 2 ? 'black' : 'white'} highlight={highlights[i][j]} inputAllowed={inputAllowed} />)
            else
                boardView.push(<Tile key={pos} pos={pos} tileColor={(i + j) % 2 ? 'black' : 'white'} highlight={highlights[i][j]} inputAllowed={inputAllowed} />)
        }
    return <div className='boardContainer'><div id='chessboard'>{boardView}</div></div>;
}

interface TileProps {
    pos: string;
    piece?: string;
    tileColor: string;
    highlight?: boolean;
    inputAllowed: boolean;
}

function Tile({ pos, piece, tileColor, highlight, inputAllowed }: TileProps) {
    const dispatch = useDispatch();
    return (
        <div className={'tile ' + tileColor + '-tile ' + (highlight ? 'highlight' : '')} onClick={() => { if (inputAllowed) dispatch(handleMove([pos, highlight])) }}>
            {piece && <div style={{ backgroundImage: `url(${piece}.png)` }} className='chesspiece'></div>}
        </div >
    );
}