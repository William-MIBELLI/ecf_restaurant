import { BaseButton, InvertedButton } from './button.style'

export const BUTTON_TYPE = {
    base: 'base',
    inverted: 'inverted'
}

const getButton = (type = BUTTON_TYPE.base) => ({
    [BUTTON_TYPE.base] : BaseButton,
    [BUTTON_TYPE.inverted] : InvertedButton
}[type])

const Button = ({ children, type, clickHandler }) => {

    const CustomButton = getButton(type)

    return (
        <CustomButton onClick={clickHandler}>{ children }</CustomButton>
    )
}

export default Button