import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import UseAdmin from "../Shared/UseAdmin";


const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center bg-slate-100">
        <h2 className="text-orange-600 font-bold text-2xl m-4">
          Welcome Our Dashboard
        </h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
          <li>
            <Link to="orders">My Orders</Link>
          </li>
          
          {admin && (
            <>
              <li>
              <Link to="manageProducts">Manage Products</Link>
              </li>
              <li>
                <Link to="addProducts">Add Products</Link>
              </li>
              <li>
                <Link to="makeAdmin">Make Admin</Link>
              </li>
              
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
