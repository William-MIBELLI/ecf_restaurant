import { BaseButton, InvertedButton, DeleteButton, ConfirmButton } from './button.style'

export const BUTTON_TYPE = {
    base: 'base',
    inverted: 'inverted',
    delete: 'delete',
    confirm: 'confirm'
}

const getButton = (look = BUTTON_TYPE.base) => ({
    [BUTTON_TYPE.base] : BaseButton,
    [BUTTON_TYPE.inverted] : InvertedButton,
    [BUTTON_TYPE.delete] : DeleteButton,
    [BUTTON_TYPE.confirm] : ConfirmButton
}[look])

const Button = ({ className, children, clickHandler, look = BUTTON_TYPE.base, ...otherProps }) => {

    const CustomButton = getButton(look)

    return (
        <CustomButton {...otherProps} className={className} onClick={clickHandler}>{ children }</CustomButton>
    )
}

export default Button