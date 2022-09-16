import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

function AuthProvider() {
  return <AuthContext></AuthContext>;
}

function useAuth() {
  const context = AuthProvider();
  return context;
}
