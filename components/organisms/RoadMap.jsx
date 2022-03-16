import { RoadMapStyle } from "../atoms/road-map-style";
import { Title1 } from "../atoms/title-1";
import Image from 'next/image';
import separator from '../../public/img/puntos.svg';
import anillos from '../../public/img/anillos.svg';
import copas from '../../public/img/copas.svg';
import tarta from '../../public/img/tarta.svg';
import musica from '../../public/img/musica.svg'
import RoadMapTextRight from "../molecules/RoadMapTextRight";
import RoadMapTextLeft from "../molecules/RoadMapTextLeft";
import { RoadMapTextBus } from "../atoms/road-map-bus";

export default function RoadMap() {
    const ceremonyTexts = {
        hour: '13h',
        mins: '00',
        primary: 'Ceremonia civil',
        secondary: 'en jardines'
    }
    const cocktailTexts = {
        hour: '14h',
        mins: '00',
        primary: 'Cocktail de bienvenida',
        secondary: 'en jardines o salones'
    }
    const lunchTexts = {
        hour: '16h',
        mins: '00',
        primary: 'Banquete',
        secondary: 'en salón Long Island'
    }
    const drinkTexts = {
        hour: '19h',
        mins: '30',
        primary: 'DJ & Barra libre',
        secondary: 'en discoteca o jardines (lo que el tiempo permita)'
    }
    return(<RoadMapStyle>
        <div className="flex flex-col basis-full justify-center">
            <Title1>Hoja de ruta</Title1>
            <div className="grid grid-rows-4 grid-flow-col auto-cols-min gap-4 justify-center">
                <div className="h-20 md:h-44">
                    <div className="flex justify-end items-center">
                        <div className="w-14 md:w-28 rotate-45 mt-4 md:mt:0">
                            <Image
                                src={anillos}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className="h-20 md:h-48 flex justify-start items-center pt-5">
                    <RoadMapTextLeft
                        texts={cocktailTexts}
                    />
                </div>
                <div className="h-20 md:h-48 pt-4 md:pt-8">
                    <div className="flex justify-end items-center">
                        <div className="w-14 md:w-28">
                            <Image
                                src={tarta}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className="h-20 md:h-48 flex justify-start items-end md:mt-8">
                    <RoadMapTextLeft
                        texts={drinkTexts}
                    />
                </div>
                <div className="row-span-4 flex w-full justify-center pt-8 pb-8">
                    <div className="w-5 md:w-10">
                        <Image
                            src={separator}
                            alt=''
                        />
                    </div>
                </div>
                <div className="h-20 md:h-48 pt-5">
                    <RoadMapTextRight
                        texts={ceremonyTexts}
                    />
                </div>
                <div className="h-20 md:h-48">
                    <div className="flex justify-start items-center">
                        <div className="w-14 md:w-28">
                            <Image
                                src={copas}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center pt-5" >
                    <RoadMapTextRight
                        texts={lunchTexts}
                    />
                </div>
                <div className="h-20 md:h-48 mt-5">
                    <div className="flex justify-start items-end h-full">
                        <div className="w-14 md:w-28">
                            <Image
                                src={musica}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-14 md:mt-32">
                <RoadMapTextBus><span>Habrá servicio de buses desde Valladolid al Bohío tanto para subir como para bajar.</span></RoadMapTextBus>
            </div>
        </div>
    </RoadMapStyle>)
}