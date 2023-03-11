import Button from '../Button/button'
import { FormInputContainer, FormContainer, FormButtonContainer } from './form.style'
import ErrorMessage from '../Error-Message/errorMessage'

const Form = ({ children, submitHandler, buttonText, className, disabledB = true }) => {

    return (
        <FormContainer onSubmit={submitHandler} className={className}>
            <FormInputContainer>
                {children}
            </FormInputContainer>
            <FormButtonContainer>
            {disabledB ? (
                <Button type={'submit'}>{buttonText}</Button>           
            ) : (
                <ErrorMessage>Merci de renseigner tous les champs avant de valider</ErrorMessage>
            )}
            </FormButtonContainer>
        </FormContainer>
    )
}

export default Form