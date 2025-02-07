import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "../../routes/routes";
import ErrorBoundary from "../../components/common/ErrorBoundary/ErrorBoundary.jsx"; 
import styles from "./Content.module.scss";

function Content() {
  return (
    <div className={styles.contentContainer}>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Content;
