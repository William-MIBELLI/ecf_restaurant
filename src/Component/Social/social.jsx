import { SocialContainer, SocialIcon, SocialIconContainer } from './social.style'
import facebook from '../../Asset/Icons/facebook.png'
import instagram from '../../Asset/Icons/instagram.png'
import twitter from '../../Asset/Icons/twitter.png'

const Social = () => {
    return (
        <SocialContainer>
            <h4>Nos réseaux</h4>
            <SocialIconContainer>
                <SocialIcon src={facebook}/>
                <SocialIcon src={instagram}/>
                <SocialIcon src={twitter}/>
            </SocialIconContainer>
        </SocialContainer>
    )
}

export default Social