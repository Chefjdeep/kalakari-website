import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Splash from "./components/Splash";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import KalakariPage from "./pages/KalakariPage";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import "./App.css";
import SoundPlayer from "./components/SoundPlayer";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <KalakariPage />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/achievements"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Achievements />
            </motion.div>
          }
        />
        <Route
          path="/gallery"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Gallery />
            </motion.div>
          }
        />

        <Route
          path="*"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <NotFound /> {/* A NotFound page for 404 */}
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <SoundPlayer/>
      {showSplash ? (
        <Splash onFinish={() => setShowSplash(false)} />
      ) : (
        <div className="App">
          <Router>
            <Navbar />
            <AnimatedRoutes />
          </Router>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
