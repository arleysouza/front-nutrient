import { Route, Routes } from "react-router-dom";
import { NotFoundPage, SignInPage, SignUpPage } from "../pages";


export default function UnsignedRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
