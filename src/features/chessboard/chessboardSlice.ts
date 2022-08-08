import { createSlice } from "@reduxjs/toolkit";
import { Chess, Square } from 'chess.js';

export const chessboardSlice = createSlice({
    name: 'chessboard',
    initialState: {
        game: new Chess(),
        selectedTile: '',
        highlightedTiles: new Array(8).fill(new Array(8).fill(false)),
        movesSoFar: '',
        moved: false,
    },
    reducers: {
        handleMove: (state, action) => {
            // select the tile, and
            // highlight the possible moves from this tile
            let [pos, highlight] = action.payload
            if (!highlight) {
                state.selectedTile = pos;
                let movesPossible = state.game.moves({ square: pos, verbose: true });
                // reset highlighted tiles
                for (let idx = 0; idx < 8; idx++)
                    state.highlightedTiles[idx].fill(false);
                movesPossible.forEach(move => {
                    let [i, j] = parsePosition(move.to);
                    state.highlightedTiles[7 - j][i] = true;
                })
            }
            else {
                state.game.move({ from: state.selectedTile as Square, to: pos })
                // reset the board highlights, and 
                // FIXME also necessary because components are not being reloaded otherwise for some reason (POSSIBLE BUG in immer.js)
                for (let idx = 0; idx < 8; idx++)
                    state.highlightedTiles[idx].fill(false);
                state.movesSoFar = state.game.pgn({ max_width: 5, newline_char: '<br />' })
            }
            // console.log(state.game.ascii());
        },
        resetChessboard: (state) => {
            for (let idx = 0; idx < 8; idx++)
                state.highlightedTiles[idx].fill(false);
            state.game = new Chess();
            state.selectedTile = '';
            state.highlightedTiles = new Array(8).fill(new Array(8).fill(false));
            state.movesSoFar = '';
            state.moved = false;

        },
        loadPGN: (state, action) => {
            let notation = action.payload;
            state.game.load_pgn(notation)
            state.selectedTile = ''
            state.highlightedTiles = new Array(8).fill(new Array(8).fill(false));
            state.movesSoFar = '';
            state.moved = false;
        },
        loadGame: (state, action) => {
            state.game = action.payload
            state.selectedTile = ''
            state.highlightedTiles = new Array(8).fill(new Array(8).fill(false));
            state.movesSoFar = '';
            state.moved = false;
        }
    }
})

function parsePosition(move: string) {
    return [move[0].charCodeAt(0) - 'a'.charCodeAt(0), Number(move[1]) - 1]
}

export const selectHistory = (state: any) => state.chessboard.game.history() // returns a list of moves in SAN
export const selectBoard = (state: any) => state.chessboard.game.board()
export const selectHighlights = (state: any) => state.chessboard.highlightedTiles;
export const selectMoves = (state: any) => state.chessboard.movesSoFar
export const { handleMove, resetChessboard, loadPGN, loadGame } = chessboardSlice.actions
export default chessboardSlice.reducer