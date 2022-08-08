import { configureStore } from "@reduxjs/toolkit";
import chessboardReducer from "../features/chessboard/chessboardSlice"

export default configureStore({
    reducer: {
        chessboard: chessboardReducer
    }
})