import Image from "next/image";
import { HeaderStyle } from "../atoms/headerStyles";

import sello from '../../public/img/sello.png'

export default function Header() {
    return(<HeaderStyle>
        <div className="flex basis-full justify-center h-full items-center">
            <div style={{width: '500px', height: '300px', position: 'relative'}}>
                <Image
                    src={sello}
                    alt='sello'
                    layout='fill'
                    width={500}
                    height={300}
                />
            </div>
        </div>
    </HeaderStyle>)
}