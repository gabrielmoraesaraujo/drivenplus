import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function Cadastro(){

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    return(

        <Inicio>
            <Entrada>
                 <input value={nome}    placeholder="Nome"/>
                 <input value={cpf}    placeholder="CPF"/>
                 <input value={email}    placeholder="E-mail"/>
                 <input value={senha}    placeholder="Senha"/>
               
                <button>CADASTRAR</button>
            </Entrada>

                <h3>Já possuí uma conta? Entre</h3>

        </Inicio>


    );
}

const Inicio = styled.div `

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #0e0e13;
    padding-top: 100px;

    h3{
       
        height: 16px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        color: #FFFFFF;

        margin: 50px;
    }

`

const Entrada = styled.div `

    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;


    input{
        width:299px;
        height: 52px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 52px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 8px;
        margin-bottom: 16px;
    }

    button{
        width: 100px
        height: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background: #FF4791;
        font-size: 14px;
        color: #FFFFFF;
        padding: 18px, 122px, 18px, 122px;
        line-height: 26px;
        text-align: center;
        

    }

`