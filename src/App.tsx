// Third-party imports
import { useState } from "react";

// Global imports
import "@/styles/App.scss";
import { Sidebar, BoardToNotation, NotationToBoard } from "@/components";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const App = () => {
	// const to store 0 or 1 depending on whether transcription or recording feature is selected
	const [selectedFeature, setSelectedFeature] = useState(0);
	const [freshGame, setFreshGame] = useState(false);

	return (
		<div className="App">
			<Sidebar
				selectedFeature={selectedFeature}
				setSelectedFeature={setSelectedFeature}
				setFreshGame={setFreshGame}
			/>
			{selectedFeature === 0 ? (
				<BoardToNotation freshGame={freshGame} setFreshGame={setFreshGame} />
			) : (
				<NotationToBoard freshGame={freshGame} setFreshGame={setFreshGame} />
			)}
		</div>
	);
};

export default App;
