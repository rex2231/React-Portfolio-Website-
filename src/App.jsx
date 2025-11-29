import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ThemeProvider } from "./context/ThemeContext";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import ProtectedRoutes from "./Services/ProtectedRoute.jsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* protectedRoute */}
            <Route path="/" element={<ProtectedRoutes />}>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
