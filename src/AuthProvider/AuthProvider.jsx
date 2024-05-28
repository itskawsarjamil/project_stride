import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect } from "react";
import { useState } from "react";
import { app } from "../firebase/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider);
  };
  const createUserUsingEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const EmailPasswordSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const profileUpdate = (updatedInfo) => {
    console.log(updatedInfo);
    return updateProfile(auth.currentUser, updatedInfo);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      console.log("observer watching");
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      }
      setLoading(false);
    });
    return () => unsub;
  }, []);

  const authInfo = {
    user,
    setUser,
    googleSignIn,
    createUserUsingEmailPass,
    profileUpdate,
    logOut,
    EmailPasswordSignIn,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.object,
};
