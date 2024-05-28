import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/loadingSpinner";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useAuth();
  console.log(loading);
  const location = useLocation();
  console.log(location);
  //   console.log(navigate);
  if (loading) {
    return <LoadingSpinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
  children: PropTypes.object,
};
