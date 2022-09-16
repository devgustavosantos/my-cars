import { useState, useEffect } from "react";

import { Container, Content, BackgroundImg } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  useEffect(() => {
    function getUserRegisters() {
      const allUsers = localStorage.getItem("@users");
      console.log(allUsers);
    }

    getUserRegisters();
  }, []);
  return (
    <Container>
      <Content>
        <h1>myCars</h1>
        <h3>Uma aplicação para gerenciar o cadastros de carros.</h3>
        <h2>Faça seu login</h2>
        <Input placeholder="Usuário" type="text" />
        <Input placeholder="Senha" type="password" />
        <Button title="Entrar" />
        <ButtonText title="Criar conta" to="/register" />
      </Content>
      <BackgroundImg />
    </Container>
  );
}
