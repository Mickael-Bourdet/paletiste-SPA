import "./App.css";
import BackToTopPage from "./utils/BackToTopPage";
import MobileNav from "./components/layout/MobileNav";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Error404 from "./pages/Error404";
import { ErrorBoundary } from "react-error-boundary";
import Error500 from "./pages/Error500";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import LegalNotice from "./pages/LegalNotice";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/confidentialite" element={<PrivacyPolicy />} />
          <Route path="/conditions" element={<TermsOfUse />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
      <MobileNav />
    </div>
  );
}

export default App;
