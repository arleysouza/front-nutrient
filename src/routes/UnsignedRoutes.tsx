import { Route, Routes } from "react-router-dom";
import { FoodPage, NotFoundPage, SignInPage, SignUpPage } from "../pages";
import { FoodProvider } from "../contexts";

export default function UnsignedRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/foods" element={<FoodProvider><FoodPage /></FoodProvider>} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
