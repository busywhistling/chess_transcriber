// Third-party imports

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export interface ChessboardPosition {
  label: string;
  xCoordinate: number;
  yCoordinate: number;
  tileColor: string;
}

const xAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const yAxis = [8, 7, 6, 5, 4, 3, 2, 1];

export const chessboardPositions: ChessboardPosition[] = xAxis
  .map((xLabel, xIndex) =>
    yAxis.map((yLabel, yIndex) => ({
      label: xLabel + yLabel,
      xCoordinate: xIndex,
      yCoordinate: yIndex,
      tileColor: (xIndex + yIndex) % 2 == 0 ? "black" : "white",
    }))
  )
  .reduce((arr1, arr2) => [...arr1, ...arr2]);
