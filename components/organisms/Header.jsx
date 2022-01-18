import Image from "next/image";
import { HeaderStyle } from "../atoms/headerStyles";

import sello from '../../public/img/logo.svg'
import { Title2 } from "../atoms/title-2";
import { Title3 } from "../atoms/title-3";

export default function Header() {
    return(<HeaderStyle>
        <div className="flex-wrap basis-full justify-center h-full items-center p-32">
            <div className="flex">
                <div className="flex justify-end items-end"><Title3>27 . 8</Title3></div>
                <div style={{width: '300px', position: 'relative'}}>
                    <Image
                        src={sello}
                        alt='sello'
                    />
                </div>
                <div className="flex justify-start items-end"><Title3>2022</Title3></div>
            </div>
            <div className="col-span-3">
                <Title2>Lucía & Mario</Title2>
            </div>
        </div>
    </HeaderStyle>)
}