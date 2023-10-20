
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignUp from "./components/SignUp"
import CreateAccount from "./components/CreateAccount"


function App() {
  return (
    <>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/createaccount" element={<CreateAccount/>}/>

    </Routes>
    </div>
    </>
  );
}

export default App;
