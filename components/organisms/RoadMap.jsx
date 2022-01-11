import { RoadMapStyle } from "../atoms/road-map-style";
import { Title1 } from "../atoms/title-1";

export default function RoadMap() {
    return(<RoadMapStyle>
        <div className="flex basis-full justify-center h-full">
            <Title1>Hoja de ruta</Title1>
        </div>
    </RoadMapStyle>)
}