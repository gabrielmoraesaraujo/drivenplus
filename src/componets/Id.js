import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Logo from "../assets/img/LogoId.png";

export default function Id(){

    const [nomecartao, setNomecartao] = useState("");
    const [digitosdocartao, setDigitosdocartai] = useState("");
    const [codigoseguranca, setCodigoseguranca] = useState("");
    const [validade, setValidade] = useState("");

    return(

        <Inicio>
            <Header></Header>
            <Container>
                <img src={Logo} />
            </Container>
            <Beneficios>
                <LinhaIcone>

                </LinhaIcone>
                <p>1. Brindes exclusivos</p>
                <p>2. Materiais bônus de web</p>
            </Beneficios>
            <Preco>
                <LinhaIcone>
                    
                </LinhaIcone>
                <p>R$ 39,99 cobrados mensalmente</p>
            </Preco>
                <input value={nomecartao} placeholder="Nome impresso no cartão" />
                <input value={digitosdocartao} placeholder="Digitos do cartão" />
            <Duplo>
                <input value={codigoseguranca} placeholder="Código de segurança"/>
                <input value={validade} placeholder="Validade"/>
            </Duplo>

            <button>Assinar</button>


        </Inicio>
    );
}

const Inicio = styled.div `

    width: 100px;
    height: 100px;  
    background: red;

`
const Header = styled.div `

`

const Container = styled.div `

`
const Beneficios = styled.div `

`
const LinhaIcone = styled.div `

`
const Preco = styled.div `

`
const Duplo = styled.div `

`