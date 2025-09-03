import "./App.css";
import BackToTopPage from "./utils/BackToTopPage";
import MobileNav from "./components/layout/MobileNav";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Error404 from "./pages/Error404";
import { ErrorBoundary } from "react-error-boundary";
import Error500 from "./pages/Error500";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    // Wrapper for the entire app
    <div className="bg-body min-h-screen text-primary flex flex-col">
      <BackToTopPage />
      <Header />

      <ErrorBoundary
        FallbackComponent={Error500}
        resetKeys={[location.pathname]}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/concours/:slug" element={<EventDetails />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </ErrorBoundary>
      <MobileNav />
    </div>
  );
}

export default App;
