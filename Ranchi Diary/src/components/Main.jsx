import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import SignUpForm from "./SignUpForm";

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<SignUpForm />} />
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
