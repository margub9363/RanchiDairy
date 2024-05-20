import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SideBar from "./components/SideBar";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Subscription from "./components/Subscription";
import Payment from "./components/Payment";
import Customers from "./Customers";
import SendNotification from "./components/SendNotification";
import Doctors from "./components/Doctors";
import FoodDeliviries from "./components/FoodDeliviries";
import Tractor from "./components/Tractor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="content">
          <Header />
          <div className="homepage">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/doctor" element={<Doctors />} />
                <Route path="/foodDeliviries" element={<FoodDeliviries />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/sendNotification"
                  element={<SendNotification />}
                />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/tractor" element={<Tractor />} />
              </Routes>
            </BrowserRouter>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
  // return (
  //   <>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<HomePage />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </>
  // );
}

export default App;
