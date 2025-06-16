import { Routes, Route } from "react-router-dom";
import Home from "./pages/Default/";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
