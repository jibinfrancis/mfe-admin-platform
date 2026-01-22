import React from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { loadMfe } from "./mfe/loadMfe";
import './styles/globals.css'

export default function CustomRoutes({ mfes }: { mfes: any[] }) {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {mfes.filter(m => m.enabled).map(mfe => {
            const Remote = React.lazy(() =>
              loadMfe(mfe.scope, mfe.module, mfe.url)
            );

            return (
              <Route
                key={mfe.name}
                path={mfe.route}
                element={<Remote />}
              />
            );
          })}
        </Routes>
      </Suspense>
  );
}
