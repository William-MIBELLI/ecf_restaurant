import Button from '../Button/button'
import { FormInputContainer, FormContainer, FormButtonContainer } from './form.style'

const Form = ({ children, submitHandler, buttonText, className }) => {


    return (
        <FormContainer onSubmit={submitHandler} className={className}>
            <FormInputContainer>
                {children}
            </FormInputContainer>
            <FormButtonContainer>
                <Button type={'submit'}>{buttonText}</Button>
            </FormButtonContainer>
        </FormContainer>
    )
}

export default Form