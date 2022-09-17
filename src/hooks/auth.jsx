import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [userInfos, setUserInfos] = useState(false);

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

    localStorage.setItem("@user-infos", JSON.stringify(user));
    setUserInfos(user);
  }

  function signOut() {
    localStorage.removeItem("@user-infos");
    setUserInfos(false);
  }

  useEffect(() => {
    const isUserLoggedIn =
      JSON.parse(localStorage.getItem("@user-infos")) || false;

    setUserInfos(isUserLoggedIn);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, userInfos }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
