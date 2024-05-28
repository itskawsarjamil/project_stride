import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation;
  const from = location?.state?.from?.pathname;
  const {
    setUser,
    createUserUsingEmailPass,
    profileUpdate,
    user,

    setLoading,
  } = useAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(userName, email, password, confirmPassword);
    if (password != confirmPassword) {
      setError("password didn't matched");
    } else {
      setError("");
    }
    setLoading(true);
    createUserUsingEmailPass(email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        setError("");
        profileUpdate({ displayName: userName })
          .then(() => {
            // console.log(res);
            console.log("profile name updated");
            setLoading(false);
            navigate(from);
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => console.log(e));
  };
  console.log(user);
  return (
    <div className="md:h-screen bg-indigo-100 flex justify-center items-center my-4">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form
          className="bg-white p-10 rounded-lg shadow-lg min-w-full"
          onSubmit={handleRegister}
        >
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Form Register
          </h1>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="@email"
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="confirm"
            >
              Confirm password
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="password"
              name="confirmPassword"
              id="confirm"
              placeholder="confirm password"
            />
          </div>
          {error ? (
            <div>
              <p className="text-red-500 font-bold text-center">{error}</p>{" "}
            </div>
          ) : null}

          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
          >
            Register
          </button>
          <Link to={"/login"}>
            <button
              type="submit"
              className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
