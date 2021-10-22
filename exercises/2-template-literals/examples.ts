import { generatePath } from "react-router";
// import "typed-query-selector";

/* react-router */
const route = "/projects/:projectId/nodes/:nodeId";

const path = generatePath(route, { projectId: 1, nodeId: 2 });

/* typed-query-selector */
const element = document.querySelector('input[name="asdf"]');
if (element) {
  console.log(element.value);
}
