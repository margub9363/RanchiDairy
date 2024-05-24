import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import SignUpForm from "./SignUpForm";
import LogInPage from "./LoginPage";

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<SignUpForm />} />
          <Route path="/login" element={<LogInPage />}></Route>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
