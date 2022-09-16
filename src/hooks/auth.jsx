import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [accreditedUser, setAccreditedUser] = useState(false);

  function signIn(data) {
    const allUsers = JSON.parse(localStorage.getItem("@users")) || [];

    const user = allUsers.find(item => item.user == data.user);

    if (!data.user || !data.password) {
      return alert("Todos os campos devem estar preenchidos. Tente novamente.");
    }

    if (!user) {
      return alert(
        "Usuário e/ou senha incorretos. Verifique e tente novamente."
      );
    }

    if (user.password != data.password) {
      return alert(
        "Usuário e/ou senha incorretos. Verifique e tente novamente."
      );
    }

    setAccreditedUser(true);
  }

  return (
    <AuthContext.Provider value={{ signIn, accreditedUser }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
