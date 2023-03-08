import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Header from '../../Component/Header/header'
import PageContainer from '../../Component/Page-Container/pageContainer'
import SignInForm from '../../Component/sign-in-form/signInForm'
import SignUpForm from '../../Component/sign-up-form/signUpForm'
import { getCurrentUserSelector } from '../../store/user/user.selector'
import { LogInContainer, MailAdressDisplay } from './logIn.style'

const LogIn = () => {

    const headerContent = {
        imgUrl: 'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        h1: 'Connectez Vous',
        title: 'La page de connexion, c\'est bien ici',
        subTitle: 'Vous pouvez créez un compte ou vous connecter',
        content: 'Le Quai Antique vous permet de créer un compte sur son site internet. La création est entièrement gratuite et vous permet de gagner du temps lors de vos prochaines réservations !'
    }

    const currentUser = useSelector(getCurrentUserSelector)

    return (
        <Fragment>
            <Header headerContent={headerContent}/>
            <PageContainer>
            {!Object.keys(currentUser).length ? (
                <LogInContainer>
                    <SignInForm/>
                    <SignUpForm/>
                </LogInContainer>
            ) : (
                <h4>Vous êtes connecté en tant que <MailAdressDisplay>{currentUser.mail}</MailAdressDisplay></h4>
            )}
            </PageContainer>
        </Fragment>
    )
}

export default LogIn