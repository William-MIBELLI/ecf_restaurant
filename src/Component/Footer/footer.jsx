import Contact from '../Contact/contact'
import Planning from '../Planning/planning'
import Social from '../Social/social'
import { FooterContainer } from './footer.style'

const Footer = () => {
    return(
        <FooterContainer>
            <Social/>
            <Contact/>
            <Planning/>
        </FooterContainer>
    )
}

export default Footer