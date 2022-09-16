import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Container, Content, BackgroundImg } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
  const [data, setData] = useState({ name: "", user: "", password: "" });

  const navigate = useNavigate();

  function handleData(e) {
    const { name, value } = e.target;

    switch (name) {
      case "form-name":
        setData({
          name: value,
          user: data.user,
          password: data.password,
        });
        break;

      case "form-user":
        setData({
          name: data.name,
          user: value,
          password: data.password,
        });
        break;

      case "form-password":
        setData({
          name: data.name,
          user: data.user,
          password: value,
        });
        break;
    }
  }

  function registerUser() {
    const allUsers = JSON.parse(localStorage.getItem("@users")) || [];

    const userAlreadyRegistered = allUsers.find(item => item.user == data.user);

    if (!data.name || !data.user || !data.password) {
      return alert(
        "Todos os campos tem que estar preenchidos. Tente novamente."
      );
    }

    if (userAlreadyRegistered) {
      return alert("Este usuário já está em uso. Tente outro.");
    }

    try {
      const updatedUsers = [data, ...allUsers];

      localStorage.setItem("@users", JSON.stringify(updatedUsers));

      setData({ name: "", user: "", password: "" });

      alert("Usuário cadastrado com sucesso. Agora você pode se logar.");
      navigate("/");
    } catch (error) {
      alert("Não foi possível cadastrar o usuário. Tente novamente");
      console.log(error);
    }
  }

  return (
    <Container>
      <BackgroundImg />
      <Content>
        <h1>myCars</h1>
        <h3>Uma aplicação para gerenciar o cadastros de carros.</h3>
        <h2>Faça seu cadastro</h2>
        <Input
          placeholder="Nome"
          type="text"
          name="form-name"
          onChange={e => handleData(e)}
          value={data.name}
        />
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
        <Button title="Cadastrar" onClick={registerUser} />
        <ButtonText title="Voltar para login" to="/" />
      </Content>
    </Container>
  );
}
