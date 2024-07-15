import { Route, Routes } from "react-router-dom";
import { FoodPage, NotFoundPage, SettingsPage } from "../pages";
import { FoodProvider } from "../contexts";

export default function AdmRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FoodProvider><FoodPage /></FoodProvider>} />
        <Route path="/foods" element={<FoodProvider><FoodPage /></FoodProvider>} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
