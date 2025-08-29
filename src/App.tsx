import "./App.css";
import BackToTopPage from "./utils/BackToTopPage";
import MobileNav from "./components/layout/MobileNav";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    // Wrapper for the entire app
    <div className="bg-body min-h-screen text-primary flex flex-col">
      <BackToTopPage />
      <MobileNav />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
