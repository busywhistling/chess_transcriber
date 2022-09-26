## Chess Transcriber

A transcriber React app to play a game of chess and transcribe the moves to the Standard Algebraic Notation used by FIDE. Alternatively, one can input SAN for a given game and walk through the moves observing the corresponding board positions.

### Tech

-   [React](https://reactjs.org/) for the frontend UI ~~& [Redux](https://redux.js.org/) for chessboard state management~~ (rearchitected app to not require Redux)
-   [vite](https://vitejs.dev/) & [pnpm](https://pnpm.io/) as primary development tools
-   HTML, CSS, TS as the principal programming/markup languages

### Special lessons

-   Using React hooks, managing state (with lifts to parent components when necessary), ~~using Redux for the more complicated chessboard~~
-   Integrating external libraries like [chess.js](https://github.com/jhlywa/chess.js) (mature library written over 10 years) which is responsible for the underlying chess logic
- Testing the projects with unit tests ([Jest](https://jestjs.io/)) and end-to-end tests ([Playwright](https://playwright.dev/)) (Special note: Jest needs [Babel](https://stackoverflow.com/a/55467567) to support ES6 module syntax).
- Setting up a CI/CD pipeline for testing, building & deploying app.
- Formatting `package.json` grouping together related dependencies (pinned)

### Directory structure & project architecture

-   `src` contains the main source tree, with subfolders ~~`redux` containing
the Redux store logic and~~ `components` containing the left sidebar & the main
Chessboard component (abstracted by [_functionality_](https://paramjit.org/blog/22-09-17-implementing-a-chess-transcriber-in-react/)).
-   Project architected as a standard React + Typescript web app.

### Future extensions with minimal effort

-   [x] Make the web app responsive (this step requires non-trivial UI design decisions).
-   [ ] Augment with the well-known [express](https://expressjs.com/) and [socket.io](https://socket.io/) JS libraries to enable playing online chess on this board.

### Build & run

```bash
git clone https://github.com/busywhistling/chess_transcriber
cd chess_transcriber
pnpm install
pnpm  dev # to run dev server
pnpm test # to run test suites
pnpm build # to build for production
```

#### Sample chess moves to play with

```text
1. e4 d5
2. exd5 e6
3. dxe6 Nf6
```
