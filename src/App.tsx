import "./App.css";
import BackToTopPage from "./utils/BackToTopPage";
import MobileNav from "./components/layout/MobileNav";

function App() {
  return (
    // Wrapper for the entire app
    <div className="bg-body min-h-screen text-primary flex flex-col">
      <BackToTopPage />
      <MobileNav />
    </div>
  );
}

export default App;
