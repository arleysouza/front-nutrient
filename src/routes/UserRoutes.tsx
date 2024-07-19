import { Route, Routes } from "react-router-dom";
import { EatPage, FoodPage, NotFoundPage, ProductPage, ProfilePage, SettingsPage } from "../pages";
import { EatProvider, FoodProvider, ProductProvider } from "../contexts";

export default function UserRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EatProvider><EatPage /></EatProvider>} />
        <Route path="/eat" element={<EatProvider><EatPage /></EatProvider>} />
        <Route path="/foods" element={<FoodProvider><FoodPage /></FoodProvider>} />
        <Route path="/products" element={<ProductProvider><ProductPage /></ProductProvider>} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
