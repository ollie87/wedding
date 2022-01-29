import { RoadMapTextSecondary } from "../atoms/raoad-map-text-secondary";
import { RoadMapTextPrimary } from "../atoms/road-map-text-primary";
import { RoadMapTextTime } from "../atoms/road-map-text-time";


export default function RoadMapTextRight({texts}) {
    return(
            <div className="flex gap-4">
                <div>
                    <RoadMapTextTime>{texts.hour}</RoadMapTextTime>
                    <RoadMapTextTime>{texts.mins}</RoadMapTextTime>
                </div>
                <div className="w-[28rem]">
                    <RoadMapTextPrimary>{texts.primary}</RoadMapTextPrimary>
                    <RoadMapTextSecondary>{texts.secondary}</RoadMapTextSecondary>
                </div>
            </div>
    )
}