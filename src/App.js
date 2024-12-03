import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";
import PlayerScreen from "./Pages/PlayerScreen"
import HighlightPlayer from "./Pages/HighlightPlayer";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/movie/:id" element={<PlayerScreen/>}/>
        <Route path="/HighlightPlayer" element={<HighlightPlayer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
