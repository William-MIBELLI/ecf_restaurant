import { InputSelectorBase, Label, OptionStyled } from './inputSelector.style'
import { Fragment } from 'react'

const InputSelector = ({ optionList, defaultOptionText = 'Choisissez une option', label, ...otherProps }) => {
    return (
        <Fragment>
        <Label>{label}</Label>
            <InputSelectorBase {...otherProps}>
            <OptionStyled  selected disabled value=''>{defaultOptionText}</OptionStyled>
                {optionList.map((option, index) => {
                    return ( <OptionStyled key={index} value={option}>{option}</OptionStyled>)
                })}
            </InputSelectorBase>
        </Fragment>
    )
}

export default InputSelector 