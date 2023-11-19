import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Header from "./Components/Nav/Header";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.tsx";
import FullscreenLoading from "./Components/FullscreenLoading.tsx";
import { useStore } from "effector-react";
import { $me } from "./Store/Auth.ts";
import Index from "./Pages/Add";
import Logout from "./Pages/Logout.tsx";

function App() {
  const meStore = useStore($me);

  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add"
              element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <ProtectedRoute>
                  <Logout />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Header>
      </BrowserRouter>
      {meStore.requestStatus === "PENDING" && <FullscreenLoading />}
    </>
  );
}

export default App;
