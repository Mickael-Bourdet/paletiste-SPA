import "./App.css";
import BackToTopPage from "./utils/BackToTopPage";
import MobileNav from "./components/layout/MobileNav";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Error404 from "./pages/Error404";

function App() {
  return (
    // Wrapper for the entire app
    <div className="bg-body min-h-screen text-primary flex flex-col">
      <BackToTopPage />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <MobileNav />
    </div>
  );
}

export default App;
