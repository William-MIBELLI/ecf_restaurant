import {  useState } from 'react'
import Input from '../Input/input'
import { SignInFormContainer } from './signInForm.style'
import Form from '../Form/form'

const defaultFields = {
    mail: '',
    password: ''
}

const SignInForm = () => {

    const [ fields, setFields ] = useState(defaultFields)

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setFields({...fields, [name]: value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log('submit connexion ok')
    }

    return (
        <SignInFormContainer>
            <h3>Vous avez un compte ?</h3>
            <Form submitHandler={onSubmitHandler} buttonText='Connexion'>
                <Input name='mail' label={'Adresse Email'} onChange={onChangeHandler}/>
                <Input name='password' label={'Mot de passe'} type={'password'} onChange={onChangeHandler}/>
            </Form>
        </SignInFormContainer>
    )
}

export default SignInForm