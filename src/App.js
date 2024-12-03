import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";
import PlayerScreen from "./Pages/PlayerScreen"
function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<HomeScreen/>}/>
        <Route  path="/movie/:id" element={<PlayerScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
