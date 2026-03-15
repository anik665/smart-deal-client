import React, { useEffect, useState } from "react";
import { AuthContex } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const CreateUSer = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(email, password);
  };
  const signInWithGoogle = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signOuts = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUSer) => {
      setUser(currentUSer);
      setloading(false);
    });
    return () => {
      unsuscribe();
    };
  }, []);

  const AuthInfo = {
    CreateUSer,
    singInUser,
    user,
    loading,
    signInWithGoogle,
    signOuts,
  };
  return (
    <div>
      <AuthContex value={AuthInfo}>{children}</AuthContex>
    </div>
  );
};

export default AuthProvider;
