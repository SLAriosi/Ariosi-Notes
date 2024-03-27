import { FiArrowLeft, FiMail, FiUser, FiLock, FiCamera } from "react-icons/fi";

import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/Input"

import { Button } from "../../components/Button"

import { Link } from "react-router-dom";

export function Profile() {
   return (
      <Container>
         <header>
            <Link to="/">
               <FiArrowLeft />
            </Link>
         </header>

         <Form>
            <Avatar>
               <img
                  src="https://github.com/SLAriosi.png"
                  alt="Foto do Usuário"
               />

               <label htmlFor="avatar">
                  <FiCamera />

                  <input
                     id="avatar"
                     type="file"
                  />
               </label>

            </Avatar>
            <Input
               placeholder="Nome"
               type="text"
               icon={FiUser}
            />

            <Input
               placeholder="E-mail"
               type="text"
               icon={FiMail}
            />

            <Input
               placeholder="Senha atual"
               type="password"
               icon={FiLock}
            />

            <Input
               placeholder="Nova Senha"
               type="password"
               icon={FiLock}
            />

            <Button title={"Salvar"} />

         </Form>
      </Container>
   );
}