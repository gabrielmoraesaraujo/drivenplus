import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import DGreen from "../assets/img/DGreen.png";
import DWhite from "../assets/img/DWhite.png";
import DYellow from "../assets/img/DYellow.png";

export default function Subscriptions(){




    return(

        <Incio>
            <h1>Escolha seu Plano</h1>

            <Caixa>
                <img src={DWhite} />
                <p>R$ 39,99</p>
            </Caixa>

            <Caixa>
                <img src={DYellow} />
                <p>R$ 39,99</p>
            </Caixa>

            <Caixa>
                <img src={DGreen} />
                <p>R$ 39,99</p>
            </Caixa>
        </Incio>

    );
}

const Incio = styled.div `

        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #0e0e13;
        color: #FFFFFF;
        padding: 91px 0px 16px 0px;

        h1{
            font-size: 32px;
            Line height: 37.5px;
            margin: 5px 14px 24px 15px; 

        }


`

const Caixa = styled.div`

        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid #7E7E7E;
        border-radius: 12px;
        width: 290px;
        height: 180px;
        margin-bottom: 10px;

        p{
            font-size: 24px;
        }

        img{
             width: 150px;
        }
        
`