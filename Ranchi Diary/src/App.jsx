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
import Customers from "./components/Customers";
import SendNotification from "./components/SendNotification";
import Doctors from "./components/Doctors";
import FoodDeliviries from "./components/FoodDeliviries";
import Tractor from "./components/Tractor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimalFood from "./components/AnimalFood";
import SignUpForm from "./components/SignUpForm";
import LogInPage from "./components/LoginPage";
import Price from "./components/Price";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPriceFetch } from "./store";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPriceFetch());
  }, [dispatch]);

  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="content">
          <Header />
          <div className="homepage">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/animalFood" element={<AnimalFood />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/doctor" element={<Doctors />} />
              <Route path="/foodDeliviries" element={<FoodDeliviries />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/price" element={<Price />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/sendNotification" element={<SendNotification />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/tractor" element={<Tractor />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
