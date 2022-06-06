import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


import titulo from "../assets/img/titulo.png"

export default function Login(){


    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    return(
        <Inicio>
            <Titulo>
                <img src={titulo} alt="DrivenPlus"/>
            </Titulo>

            <Entrada>
                <ul>
                    <input value={email}    placeholder="email"/>
                    <input value={senha}    placeholder="senha"/>
                </ul>

                <button> ENTRAR</button>
            </Entrada>
            <h3>Não possuí uma conta? Cadastre-se</h3>
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

    h3{
       
        height: 16px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        color: #FFFFFF;

        margin-bottom: 100px;
    }

`

const Titulo = styled.div`

    width: 100%;
    height: 100%;
 
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
       margin: 134.93px 38px 100px 38px;
    }

`

const Entrada = styled.div `

    width: 400px;
    height: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;


    input{
        width:299px;
        height: 52px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
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