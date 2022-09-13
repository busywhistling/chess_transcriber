// Third-party imports
import { Move } from "chess.js";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

// trick: create callback function to create an empty array each time
export const false8x8Matrix = () => [...Array(8)].map(() => Array(8).fill(false));
// User defined type guard, to ensure move is of type Move before accessing it's 'to' prop
export const isTypeMove = (move: string | Move): move is Move => {
	return Object.prototype.hasOwnProperty.call(move, "to");
};

export const parsePosition = (move: string) => {
	return [move[0].charCodeAt(0) - "a".charCodeAt(0), Number(move[1]) - 1];
};
