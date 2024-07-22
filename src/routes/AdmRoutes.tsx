import { Route, Routes } from "react-router-dom";
import { NotFoundPage, SettingsPage, UserRolePage } from "../pages";

export default function AdmRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserRolePage />} />
        <Route path="/adm" element={<UserRolePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
