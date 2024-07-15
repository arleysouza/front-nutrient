import { Route, Routes } from "react-router-dom";
import { FoodPage, NotFoundPage, ProductPage, ProfilePage, SettingsPage } from "../pages";
import { FoodProvider, ProductProvider } from "../contexts";

export default function UserRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FoodProvider><FoodPage /></FoodProvider>} />
        <Route path="/foods" element={<FoodProvider><FoodPage /></FoodProvider>} />
        <Route path="/products" element={<ProductProvider><ProductPage /></ProductProvider>} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
