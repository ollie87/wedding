import Image from "next/image";
import invitation from '../../public/img/invitacion.jpg'
import { InvitationStyle } from "../atoms/invitation-style";

export default function Invitation() {
    return(
        <InvitationStyle className={'image-container'}>
            <Image src={invitation} alt='invitación' layout="responsive" className={'image'} />
        </InvitationStyle>)
}