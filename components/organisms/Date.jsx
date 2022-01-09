import { DateStyle } from "../atoms/dateStyles";
import { ParagraphWhiteLg } from "../atoms/paragraph-white-lg";
import { ParagraphWhiteMd } from "../atoms/paragraph-white-md";
import { Title2 } from "../atoms/title-2";
import { Title3 } from "../atoms/title-3";

export default function Date() {
    return(<DateStyle>
        <div className="flex basis-full justify-center h-full items-center">
            <div className="mt-20" style={{width: '500px', height: '300px', position: 'relative'}}>
                <Title2>La cita</Title2>
                <Title3>27 Agosto 2022</Title3>
                <ParagraphWhiteLg className="mb-8">Restaurante El Bohío, Puente Duero.</ParagraphWhiteLg>
                <ParagraphWhiteMd>Dirección: Paseo Simancas Pichón, s/n,</ParagraphWhiteMd>
                <ParagraphWhiteMd>47130 Puente Duero Valladolid</ParagraphWhiteMd>
            </div>
        </div>
    </DateStyle>)
}