import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import SchedPickup from "./pages/SchedPickup";
import RegisterOrg from "./pages/RegisterOrg/RegisterOrg";
import OrgHome from "./pages/OrgHome/OrgHome";
import Donor from "./pages/Donor";
import DeliveryAndNotifications from "./pages/DeliveryAndNotifications";
import MakePost from "./pages/OrgPosts/MakePost";
import DonorBrowser from "./components/DonorBrowser";
import DonationHistory from "./pages/DonationHistory";
import DonationNotification from "./pages/DonationNotification";
import ClothesComponent from "./components/FilterOptions/ClothesComponent";
import ToysComponent from "./components/FilterOptions/ToysComponent";
import FoodComponent from "./components/FilterOptions/FoodComponent";
import MedicalSuppliesComponent from "./components/FilterOptions/MedicalSuppliesComponent";
import SchoolSuppliesComponent from "./components/FilterOptions/SchoolSuppliesComponent";
import BloodDonationsComponent from "./components/FilterOptions/BloodDonationsComponent";
import Organizations from "./Data/Organizations.json";
import Posts from "./Data/Posts.json";
import AdminDashboard from "./shahd/Admindashboard";
import DonorList from "./shahd/DonorList";
import Donor_OrgSubmissions from "./shahd/Donor_OrgSubmissions";
import OrganizationList from "./shahd/OrganizationList"
import Donor_OrgRequests from "./shahd/Donor_OrgRequests"
import AccountSettings from "./shahd/AccountSettings"
import ViewNotificationPosts from "./pages/OrgPosts/ViewNotificationPosts";
import ViewAllPosts from "./pages/OrgPosts/ViewAllPosts";
import DeleteAccount from "./shahd/DeleteAccount"


import Donors from "./Data/Donors.json";
import Admin from "./Data/Admin.json";


function App() {
  const storeObjectInLocalStorage = () => {
    localStorage.setItem("admins", JSON.stringify(Admin));
    localStorage.setItem("organizations", JSON.stringify(Organizations));
    localStorage.setItem("donors", JSON.stringify(Donors));
    localStorage.setItem("posts", JSON.stringify(Posts));
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

          <Route path="/donor/:donorId" element={<Donor />}></Route>
          <Route
            path="/donor/:donorId/deliveryandnotifications"
            element={<DeliveryAndNotifications />}
          />
          <Route
            path="/donor/:donorId/donationhistory"
            element={<DonationHistory />}
          />
          <Route
            path="/donor/:donorId/donationnotification"
            element={<DonationNotification />}
          />
          <Route path="/donor/:donorId/browser" element={<DonorBrowser />} />
          <Route
            path="/donor/:donorId/schedpickup"
            element={<SchedPickup />}
          ></Route>

          {/* <Route
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
          /> */}

          {/* organization posts */}
          <Route
            path="/organization/:orgId/notifications"
            element={<ViewNotificationPosts />}
          />
          <Route
            path="/organization/:orgId/all-posts"
            element={<ViewAllPosts />}
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

          <Route
            path="/organization/:orgId/new-post"
            element={<MakePost />}
          ></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/registerOrg"
            element={<RegisterOrg></RegisterOrg>}
          ></Route>

          <Route path="/admindashboard" element={<AdminDashboard />}></Route>
          <Route path="/donorList" element={<DonorList />}></Route>
          <Route
            path="/donor_OrgSubmissions"
            element={<Donor_OrgSubmissions />}
          ></Route>
          <Route
            path="/organizationList"
            element={<OrganizationList />}
          ></Route>
          <Route
            path="/donor_OrgRequests"
            element={<Donor_OrgRequests />}
          ></Route>
          <Route path="/accountSettings" element={<AccountSettings />}>
            {" "}
          </Route>
          <Route path="/admindashboard" element={<AdminDashboard />}></Route>
          <Route path="/deleteAccount" element={<DeleteAccount/>}></Route>


          <Route path="/donorList" element={<DonorList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
