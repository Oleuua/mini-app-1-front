import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.REACT_APP_TOOLS === "true") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
