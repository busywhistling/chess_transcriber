// Third-party imports
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Global imports
import "@/styles/index.scss";
import store from "@/redux/store";

// Local imports
import App from "./App";

////////////////////////////////////////////////////////////////////////////////

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
