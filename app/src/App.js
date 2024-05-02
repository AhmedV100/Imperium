import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/register"
            element={<Register></Register>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
