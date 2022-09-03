// Third-party imports
import { useDispatch } from 'react-redux';

// Global imports
import { handleMove } from '@/redux/chessboardSlice';

// Local imports

////////////////////////////////////////////////////////////////////////////////

export interface TileProps {
    pos: string;
    piece?: string;
    tileColor: string;
    highlight?: boolean;
    inputAllowed: boolean;
}

const Tile = ({ pos, piece, tileColor, highlight, inputAllowed }: TileProps) => {
    const dispatch = useDispatch();
    return (
        <div className={'tile ' + tileColor + '-tile ' + (highlight ? 'highlight' : '')} onClick={() => { if (inputAllowed) dispatch(handleMove([pos, highlight])) }}>
            {piece && <div style={{ backgroundImage: `url(${piece}.png)` }} className='chesspiece'></div>}
        </div >
    );
}

export default Tile