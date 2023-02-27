import { BaseButton, InvertedButton } from './button.style'

export const BUTTON_TYPE = {
    base: 'base',
    inverted: 'inverted'
}

const getButton = (style = BUTTON_TYPE.base) => ({
    [BUTTON_TYPE.base] : BaseButton,
    [BUTTON_TYPE.inverted] : InvertedButton
}[style])

const Button = ({ children, clickHandler, style }) => {

    const CustomButton = getButton(style)

    return (
        <CustomButton onClick={clickHandler}>{ children }</CustomButton>
    )
}

export default Button