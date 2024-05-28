import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { logOut, user, setUser } = useAuth();
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res, "logout successful");
        setUser(null);
      })
      .catch((e) => console.log(e));
  };
  const linkList = (
    <>
      <div>
        <li>
          <NavLink to={`/`}>Home</NavLink>
        </li>

        {/* <li>
          <NavLink to={`/about`}>Profile</NavLink>
        </li> */}
        <li>
          <NavLink to={`/dashboard/all-products`}>All Products</NavLink>
        </li>
        <li>
          <NavLink to={`/dashboard/add-product`}>Add Product</NavLink>
        </li>
        <li>
          <NavLink to={`/dashboard`}>Dashboard</NavLink>
        </li>
      </div>
      {user && (
        <div className="flex justify-end">
          <li>
            <button onClick={handleLogOut} className="btn btn-primary">
              Log Out
            </button>
          </li>
        </div>
      )}
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-xl  flex flex-col justify-between">
          {/* Sidebar content here */}
          {linkList}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
