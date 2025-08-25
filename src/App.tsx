import "./App.css";
import BackToTopPage from "./components/BackToTopPage";

function App() {
  return (
    // Wrapper for the entire app
    <div className="bg-body min-h-screen text-primary flex flex-col">
      <BackToTopPage />
    </div>
  );
}

export default App;
