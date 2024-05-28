import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { googleSignIn, setUser, EmailPasswordSignIn, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setLoading(true);
    EmailPasswordSignIn(email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
        navigate(from);
      })
      .catch((e) => console.log(e));
  };
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    googleSignIn()
      .then((res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
        navigate(from);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                id="emailId"
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                defaultValue={"abc@gmail.com"}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                defaultValue={"123456"}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
              <button
                className="btn btn-secondary mt-5"
                onClick={handleGoogleSignIn}
              >
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
