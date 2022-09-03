// Third-party imports
import { configureStore } from "@reduxjs/toolkit";

// Global imports
import chessboardReducer from "@/redux/chessboardSlice";

// Local imports

////////////////////////////////////////////////////////////////////////////////

export default configureStore({
  reducer: {
    chessboard: chessboardReducer,
  },
});
