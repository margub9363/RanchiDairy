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

function App() {
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="content">
          <Header />
          <div className="homepage">
            {/* <Dashboard /> */}
            <Tractor />
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default App;
