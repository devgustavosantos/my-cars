import { useState, useEffect } from "react";

import { Container, Content, BackgroundImg } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  const [data, setData] = useState({ user: "", password: "" });
  function handleData(e) {
    const { name, value } = e.target;

    switch (name) {
      case "form-user":
        setData({
          user: value,
          password: data.password,
        });
        break;

      case "form-password":
        setData({
          user: data.user,
          password: value,
        });
        break;
    }
  }

  function trySignIn() {
    const allUsers = JSON.parse(localStorage.getItem("@users")) || [];

    const user = allUsers.find(item => item.user == data.user);

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

    setData({ name: "", user: "", password: "" });
  }

  return (
    <Container>
      <Content>
        <h1>myCars</h1>
        <h3>Uma aplicação para gerenciar o cadastros de carros.</h3>
        <h2>Faça seu login</h2>
        <Input
          placeholder="Usuário"
          type="text"
          name="form-user"
          onChange={e => handleData(e)}
          value={data.user}
        />
        <Input
          placeholder="Senha"
          type="password"
          name="form-password"
          onChange={e => handleData(e)}
          value={data.password}
        />
        <Button title="Entrar" onClick={trySignIn} />
        <ButtonText title="Criar conta" to="/register" />
      </Content>
      <BackgroundImg />
    </Container>
  );
}
