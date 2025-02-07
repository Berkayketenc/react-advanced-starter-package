import React from "react";
import "./styles/App.scss";
import Content from "./layouts/content/Content";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import store from "./store/store.js";
import queryClient from "./store/queryClient.js";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary.jsx";
import "./utils/sentry.js";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <div className="root-app">
              <Header />
              <Content />
              <Footer />
            </div>
          </Router>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />{" "}
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
