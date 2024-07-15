import { useUser } from "../hooks";
import { LoadingPage } from "../pages";
import AdmRoutes from "./AdmRoutes";
import UnsignedRoutes from "./UnsignedRoutes";
import UserRoutes from "./UserRoutes";

export default function Routes() {
  const { token, loading } = useUser();

  if (loading) {
    return <LoadingPage />;
  }
  
  return !token ? (
    <UnsignedRoutes />
  ) : token.role === "adm" ? (
    <AdmRoutes />
  ) : (
    <UserRoutes />
  );
}
