import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const {
    photoURL,
    displayName,
    email,
    phoneNumber,
    emailVerified,
    reloadUserInfo,
  } = user;
  const lastLoginAt = new Date(parseInt(reloadUserInfo.lastLoginAt))
    .toString()
    .split("(")[0];
  return (
    <div>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid grid-cols-1">
            <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
              <img
                alt="team"
                className="flex-shrink-0 object-cover object-center w-16 h-16 mx-auto -mt-8 rounded-full shadow-xl aboslute"
                src={
                  photoURL ||
                  "https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_DUFTlhOdmSdoT9F4r1Woo40pyML2.webp"
                }
              />

              <div className="p-6 lg:text-center">
                <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                  {" "}
                  Info
                </span>
                <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                  {displayName}
                </h4>
                <p className="mt-3 text-base leading-relaxed text-gray-500">
                  {email}
                </p>
                <p className="mt-3 text-base leading-relaxed text-gray-500">
                  phoneNumber: {phoneNumber || "null"}
                </p>
                <p className="mt-3 text-base leading-relaxed text-black">
                  emailVerified: {emailVerified || "null"}
                </p>
                <p className="mt-3 text-base leading-relaxed text-black">
                  LastLoginAt: <small>{lastLoginAt}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
