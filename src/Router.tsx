import { Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";


export function Router() {

  return (
    <Routes>
      <Route index path="/signup" element={<Signup />} />
      <Route index path="/" element={<Home />} />
    </Routes>
  );
}