/* NOTE: Nothing else should be imported here (css included) so that hot reload works as expected. */
import { render } from "react-dom";
import { App } from "./views/App";

render(<App />, document.getElementById("app"));
