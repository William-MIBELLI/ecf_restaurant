import { StyledErrorMsg } from './errorMessage.style'

const ErrorMessage = ({ children }) =>{
    return (
        <StyledErrorMsg>{children}</StyledErrorMsg>
    )
}

export default ErrorMessage