import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { loadRuntimeConfig } from "./config/loadRuntimeConfig";
import './styles/tokens.css'
import './styles/globals.css'
import { loadRuntimeUIHelpers } from "./config/loadRuntimeUIHelpers";

async function start() {
  const mfes = await loadRuntimeConfig();
  await loadRuntimeUIHelpers();
  createRoot(document.getElementById("root")!)
    .render(<App mfes={mfes} />);
}

start();
