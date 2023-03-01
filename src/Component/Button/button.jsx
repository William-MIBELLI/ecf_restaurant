import { BaseButton, InvertedButton, DeleteButton } from './button.style'

export const BUTTON_TYPE = {
    base: 'base',
    inverted: 'inverted',
    delete: 'delete'
}

const getButton = (look = BUTTON_TYPE.base) => ({
    [BUTTON_TYPE.base] : BaseButton,
    [BUTTON_TYPE.inverted] : InvertedButton,
    [BUTTON_TYPE.delete] : DeleteButton
}[look])

const Button = ({ className, children, clickHandler, look }) => {

    const CustomButton = getButton(look)

    return (
        <CustomButton className={className} onClick={clickHandler}>{ children }</CustomButton>
    )
}

export default Button