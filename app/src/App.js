import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
// import SchedPickup from "./pages/SchedPickup";
import RegisterOrg from "./pages/RegisterOrg/RegisterOrg";
import OrgHome from "./pages/OrgHome/OrgHome";
import Donor from "./pages/Donor";

import MakePost from "./pages/OrgPosts/MakePost";
import DonorBrowser from "./components/DonorBrowser";

import Data from "./Data/Organizations.json";

function App() {
  const storeObjectInLocalStorage = () => {
    localStorage.setItem("data", JSON.stringify(Data));
  };

  useEffect(() => {
    storeObjectInLocalStorage();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/donor" element={<Donor />}></Route>
          <Route path="/donor/browser" element={<DonorBrowser />} />
          <Route
            path="/donor/browser/all"
            element={<DonorBrowser filter={"all"} />}
          />
          <Route
            path="/donor/browser/clothes"
            element={<DonorBrowser filter={"clothes"} />}
          />
          <Route
            path="/donor/browser/toys"
            element={<DonorBrowser filter={"toys"} />}
          />
          <Route
            path="/donor/browser/food"
            element={<DonorBrowser filter={"food"} />}
          />
          <Route
            path="/donor/browser/medical"
            element={<DonorBrowser filter={"medical"} />}
          />
          <Route
            path="/donor/browser/school"
            element={<DonorBrowser filter={"school"} />}
          />
          <Route
            path="/donor/browser/blood"
            element={<DonorBrowser filter={"blood"} />}
          />

          <Route path="/organization/:orgId" element={<OrgHome />} />
          {/* <Route
            path="/organization/:orgId/posts"
            element={<OrganizationPosts />}
          />
          <Route
            path="/organization/:orgId/settings"
            element={<OrganizationSettings />}
          />
          <Route
            path="/organization/:orgId/notifications"
            element={<OrganizationNotifications />}
          /> */}

            <Route path="/organization/:orgId/new-post" element={<MakePost />}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/registerOrg"
            element={<RegisterOrg></RegisterOrg>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
