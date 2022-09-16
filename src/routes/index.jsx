import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";

export function Routes() {
  const { accreditedUser } = useAuth();

  return (
    <BrowserRouter>
      {accreditedUser ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
