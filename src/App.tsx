import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { UserProvider } from "./contexts";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
