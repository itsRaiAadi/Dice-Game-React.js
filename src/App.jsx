import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { GamePage } from "./components/GamePage";

function App() {
  return (
    <>
      <div className="flex h-screen w-full m-auto items-center justify-center p-30">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/gamepage" element={<GamePage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
