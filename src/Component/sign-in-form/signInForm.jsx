import {  useState } from 'react'
import Input from '../Input/input'
import { SignInFormContainer, MessageError } from './signInForm.style'
import Form from '../Form/form'
import { getUserInfo, signInWithMail } from '../../Services/firebase'
import { useDispatch } from 'react-redux'
import { connectUser } from '../../store/user/user.action'

const defaultFields = {
    mail: '',
    password: ''
}

const SignInForm = () => {

    const [ fields, setFields ] = useState(defaultFields)
    const { mail, password } = fields
    const [ connectionFailed, setConnectionFailed ] = useState(false)
    const dispatch = useDispatch()

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setFields({...fields, [name]: value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log('submit connexion ok')
    }

    const signIn = async ( event ) => {
        event.preventDefault()
        console.log('on rentre dans signin dans form')
        try{
            const response = await signInWithMail(mail, password)
            console.log('response : ',response)
            if(response){
                const userInfo = await getUserInfo(response.user.uid)
                if(userInfo){
                    dispatch(connectUser(userInfo))
                    setConnectionFailed(false)
                }
            }
        } catch (error){
            console.log('une erreur s\'est produite ', error)
            setConnectionFailed(true)
        }
    }

    return (
        <SignInFormContainer>
            <h3>Vous avez un compte ?</h3>
            <Form submitHandler={signIn} buttonText='Connexion'>
                <Input name='mail' label={'Adresse Email'} onChange={onChangeHandler}/>
                <Input name='password' label={'Mot de passe'} type={'password'} onChange={onChangeHandler}/>
            </Form>
                {connectionFailed && (<MessageError>Erreur lors de la connexion</MessageError>)}
        </SignInFormContainer>
    )
}

export default SignInForm