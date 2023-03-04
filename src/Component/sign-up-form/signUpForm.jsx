import { createUserDoc, createUserWithMail } from '../../Services/firebase'
import { useState } from 'react'
import Form from '../Form/form'
import Input from '../Input/input'
import { SignUpFormContainer } from './signUpForm.style'

const defaultFields = {
    lastName: '',
    firstName: '',
    mail: '',
    phone: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [ fields, setFields ] = useState(defaultFields)
    const { lastName, firstName, mail, phone, password, confirmPassword } = fields

    const onChangeHandler = (event) => {
        console.log('changement ok')
        const { name, value } = event.target
        setFields({...fields, [name]: value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log('submit creation ok ', fields)
    }

    const createUser = async (event) =>{
        event.preventDefault()
        if(password !== confirmPassword){
            return alert('le mot de passe ne correspond pas !')
        }

        const resp = await createUserWithMail(mail, password)
        console.log('response du createwithmail : ', resp.user)
        const response = await createUserDoc(resp.user, {lastName: lastName.toUpperCase(), firstName, mail, phone})
        console.log('response du createdoc : ', response)

    }

    return (
        <SignUpFormContainer>
        <h3>Pas encore de compte ? Inscrivez-vous, c'est gratuit !</h3>
            <Form buttonText={'S\'inscrire'} submitHandler={createUser}>
                <Input onChange={onChangeHandler} value={fields.lastName} name={'lastName'} label={'Votre nom'}/>
                <Input onChange={onChangeHandler} value={fields.firstName} name={'firstName'} label={'Votre prénom'}/>
                <Input onChange={onChangeHandler} value={fields.mail} name={'mail'} label={'Votre adresse Email'}/>
                <Input onChange={onChangeHandler} value={fields.phone} name={'phone'} label={'Votre numéro de téléphone'}/>
                <Input onChange={onChangeHandler} value={fields.password} name={'password'} label={'Votre mot de passe'} type='password'/>
                <Input onChange={onChangeHandler} value={fields.confirmPassword} name={'confirmPassword'} label={'Confirmation mot de passe'} type='password'/>
            </Form>
        </SignUpFormContainer>
    )
}

export default SignUpForm