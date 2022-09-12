// Third-party imports
import { useState } from "react";
import { useSelector } from "react-redux";

// Global imports
import "@/styles/App.scss";
import { selectHistory } from "@/redux/chessboardSlice";
import { Chessboard } from "@/components/chessboard";
import { LeftSidebar, RightSidebar } from "@/components/layout";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const App = () => {
	const hist = useSelector(selectHistory);

	// const to store 0 or 1 depending on whether transcription or recording feature is selected
	const [selectedFeature, setSelectedFeature] = useState(0);

	const [notation, setNotation] = useState("");
	const [isWrongNotation, setIsWrongNotation] = useState(false);
	const [currentSelected, setCurrentSelected] = useState(hist.length - 1);

	return (
		<div className="App">
			<LeftSidebar
				selectedFeature={selectedFeature}
				setSelectedFeature={setSelectedFeature}
				setNotation={setNotation}
				setIsWrongNotation={setIsWrongNotation}
				setCurrentSelected={setCurrentSelected}
			/>
			<Chessboard inputAllowed={selectedFeature === 0} />
			<RightSidebar
				selectedFeature={selectedFeature}
				notation={notation}
				setNotation={setNotation}
				isWrongNotation={isWrongNotation}
				setIsWrongNotation={setIsWrongNotation}
				currentSelected={currentSelected}
				setCurrentSelected={setCurrentSelected}
			/>
		</div>
	);
};

export default App;
