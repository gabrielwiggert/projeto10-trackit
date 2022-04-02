import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import UserContext from "./UserContext";

function App() {
  const [userData, setUserData] = useState([null, null]);
  const [newHabit, setNewHabit] = useState(null);
  const [days, setDays] = useState([]);
  const [habits, setHabits] = useState(null);
  
  return (
    <UserContext.Provider value={{userData, setUserData, newHabit, setNewHabit, days, setDays, habits, setHabits}}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;