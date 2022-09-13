// Third-party imports
import React from "react";
import ReactDOM from "react-dom/client";

// Global imports
import "@/styles/index.scss";

// Local imports
import App from "./App";

////////////////////////////////////////////////////////////////////////////////

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
