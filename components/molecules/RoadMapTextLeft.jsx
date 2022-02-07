import { RoadMapTextSecondary } from "../atoms/raoad-map-text-secondary";
import { RoadMapTextPrimary } from "../atoms/road-map-text-primary";
import { RoadMapTextTime } from "../atoms/road-map-text-time";


export default function RoadMapTextLeft({texts}) {
    return(
            <div className="flex gap-4">
                <div className="w-full lg:w-[28rem] text-right">
                    <RoadMapTextPrimary>{texts.primary}</RoadMapTextPrimary>
                    <RoadMapTextSecondary>{texts.secondary}</RoadMapTextSecondary>
                </div>
                <div>
                    <RoadMapTextTime>{texts.hour}</RoadMapTextTime>
                    <RoadMapTextTime>{texts.mins}</RoadMapTextTime>
                </div>
            </div>
    )
}