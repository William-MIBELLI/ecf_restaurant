import Contact from '../Contact/contact'
import Planning from '../Planning/planning'
import Social from '../Social/social'
import { FooterContainer, ContactsContainer } from './footer.style'

const Footer = () => {
    return(
        <FooterContainer>
            <ContactsContainer>
                <Social/>
                <Contact/>
            </ContactsContainer>
            <Planning/>
        </FooterContainer>
    )
}

export default Footer