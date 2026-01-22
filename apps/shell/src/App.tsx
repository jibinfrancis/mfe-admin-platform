import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./CustomRoutes";
import ShellLayout from "./layout/ShellLayout";

export default function App({ mfes }: { mfes: any[] }) {
  return (
    <BrowserRouter>
      <ShellLayout>
        <CustomRoutes mfes={mfes} />
      </ShellLayout>
    </BrowserRouter>
  );
}
