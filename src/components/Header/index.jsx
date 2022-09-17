import { useState, useEffect } from "react";

import { useAuth } from "../../hooks/auth";

import { Container, User } from "./styles";

import { Wrapper } from "../Wrapper";

export function Header() {
  const [userName, setUserName] = useState("");
  const { userInfos, signOut } = useAuth();

  useEffect(() => {
    setUserName(userInfos.name);
  }, []);

  return (
    <Container>
      <Wrapper>
        <User>
          <span>Bem vindo(a),</span>
          <span>{userName}</span>
        </User>
        <button onClick={signOut}>Sair</button>
      </Wrapper>
    </Container>
  );
}
