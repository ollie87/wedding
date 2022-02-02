import Image from "next/image";
import { Paragraph } from "../atoms/paragraph";
import { Title1 } from "../atoms/title-1";
import welcome from '../../public/img/espigas_bienvenidos.svg'
import styled from 'styled-components';

const ImageContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    max-width: 1536px;
    z-index: -1;
    width: 120;
    @media (max-width: 768px) {
        display: none;
    }
`
export default function Welcome() {
    return (
        <div className="flex flex-col basis-full justify-center items-center">
            <div className="flex flex-col 2xl:w-7/12 md:w-full items-center">
                <Title1>!Bienvenidos a nuestra boda!</Title1>
                <Paragraph>
                    ¡Que sí! Que nos casamos<br />
                    (ya era hora)!!!<br /><br />															
                    ¡Estamos super felices! Nos sentimos en las nubes y queremos compartir este día tan especial. Por eso estamos preparando una boda que hará historia y en la que te lo pasarás genial.<br /><br />
                    Mientras llega el gran día hemos creado esta web con un montón de secciones para que estés al día de todo y para compartir nuestra historia de amor.<br /><br />
                    Una cosa importante, en la sección asistencia puedes confirmar si vas a la boda o no, intolerancias, alergias o dieta especial (vegetariana o vegana). Confírmanos lo antes posible por favor, que así organizarlo todo nos será mucho más fácil.<br /><br />
                    Disfruta la web y nos vemos muy pronto, mil besos!
                </Paragraph>
                <ImageContainer>
                    <Image
                        src={welcome}
                        alt=''
                        width={120}
                    />
                </ImageContainer>
            </div>
        </div>
        
    )
}