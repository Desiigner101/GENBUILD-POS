import { Route, Routes, useLocation } from "react-router-dom";
import MenuBar from "./components/MenuBar/MenuBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageCategory from "./pages/ManageCategory/ManageCategory";
import ManageItems from "./pages/ManageItems/ManageItems";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import Explore from "./pages/Explore/Explore";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/Login";

const App = () => {

  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/login' && <MenuBar />}
      <Toaster/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category" element={<ManageCategory />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/items" element={<ManageItems />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App;