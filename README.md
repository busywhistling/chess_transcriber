## Chess Simulator

A simulator React app to play a game of chess and transcribe the moves to the Standard Algebraic Notation used by FIDE. Alternatively, one can input SAN for a given game and walk through the moves observing the corresponding board positions.

### Tech

-   [React](https://reactjs.org/) for the frontend UI & [Redux](https://redux.js.org/) for chessboard state management
-   [vite](https://vitejs.dev/) & [npm](https://www.npmjs.com/) as development tools
-   HTML, CSS, TS as the principal programming/markup languages

### Special lessons

-   Using React hooks, managing state (with lifts to parent components when necessary), using Redux for the more complicated chessboard
-   Integrating external libraries like [chess.js](https://github.com/jhlywa/chess.js) (mature library written over 10 years) which is responsible for the underlying chess logic

### Directory structure & project architecture

-   `src` contains the main source tree, with subfolders `redux` containing the Redux store logic and `components` containing the sidebars & the main Chessboard component.
-   This project is architected as a standard React + Typescript web app.

### Future extensions with minimal effort

-   [x] Make the web app responsive (this step requires non-trivial UI design decisions).
-   [ ] Augment with the well-known [express](https://expressjs.com/) and [socket.io](https://socket.io/) JS libraries to enable playing online chess on this board.

### Build & run

```bash
git clone https://github.com/busywhistling/chess_simulator
cd chess_simulator
npm install
npm run dev # to run dev server
npm run build # to build for production
```

### Sample moves to play with

1. e4 d5
2. exd5 e6
3. dxe6 Nf6
