import { Fragment } from 'react'
import Header from '../../Component/Header/header'
import PageContainer from '../../Component/Page-Container/pageContainer'
import SignInForm from '../../Component/sign-in-form/signInForm'
import SignUpForm from '../../Component/sign-up-form/signUpForm'
import { LogInContainer } from './logIn.style'

const LogIn = () => {

    const headerContent = {
        imgUrl: 'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        h1: 'Connectez Vous',
        title: 'Vous vous trouvez sur la page de connexion',
        subTitle: 'Vous pouvez créez un compte ou vous connecter',
        content: 'Le Quai Antique vous permet de créer un compte sur son site internet. La création est entièrement gratuite et vous permet de gagner du temps lors de vos prochaines réservations !'
    }

    return (
        <Fragment>
            <Header headerContent={headerContent}/>
            <PageContainer>
                <LogInContainer>
                    <SignInForm/>
                    <SignUpForm/>
                </LogInContainer>
            </PageContainer>
        </Fragment>
    )
}

export default LogIn