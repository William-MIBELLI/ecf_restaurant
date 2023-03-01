import { Fragment } from 'react'
import { InputBase , LabelStyled} from './input.style'

const Input = ({ label, ...otherProps }) => {
    return (
        <Fragment>
            <LabelStyled>{label}</LabelStyled>
            <InputBase required {...otherProps}></InputBase>
        </Fragment>
    )
}

export default Input