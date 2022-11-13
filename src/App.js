import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/login";
import Register from "./component/Register";
import Devil from "./component/devil";
import Clone from "./component/clone";


function App() {
  return (

    <Router>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/devil" element={<Devil/>}/>
        <Route path="/clone" element={<Clone/>}/>

      </Routes>



    </Router>

  );
}

export default App;