import { Route, Routes } from "react-router-dom";
import "./App.css";
import CarsInfo from "./Component/CarsInfo/CarsInfo";
import Home from "./Component/Home/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProducts from "./Component/AddProducts/AddProducts";
import Dashboard from "./Component/Dashboard/Dashborad";
import LogIn from "./Component/LoginPage/LogIn";
import SignUp from "./Component/LoginPage/SignUp";
import MakeAdmin from "./Component/MakeAdmin/MakeAdmin";
import ManageOrders from "./Component/ManageOrders//ManageOrders";
import MyOrder from "./Component/MyOrder/MyOrder";
import Navbar from "./Component/Navbar/Navbar";
import Payment from "./Component/Payment/Payment";
import Purchase from "./Component/Purchase/Purchase";
import NotAPage from "./Component/Shared/NotAPage";
import RequireAdmin from "./Component/Shared/RequireAdmin";
import RequireAuth from "./Component/Shared/RequireAuth";
import Footer from "./Component/Shared/Footer";

function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home/:carcategory" element={<CarsInfo />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />

        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
       <Route path="orders" element={<MyOrder />} />
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
               <Route path="payment/:id" element={<Payment />} />
               <Route path="manageProducts" element={<ManageOrders />} />
               <Route path="addProducts" element={<AddProducts />} />
         
        </Route>
        <Route path="*" element={<NotAPage />} />
        
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
