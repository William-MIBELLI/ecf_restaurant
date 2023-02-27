import { InputSelectorBase, Label, OptionStyled } from './inputSelector.style'
import { Fragment } from 'react'

const InputSelector = ({ optionList, label }) => {
    return (
        <Fragment>
        <Label>{label}</Label>
            <InputSelectorBase>
            <OptionStyled disabled={true}>Selectionnez un service</OptionStyled>
                {optionList.map((option, index) => {
                    return ( <OptionStyled key={index} value={option}>{option}</OptionStyled>)
                })}
            </InputSelectorBase>
        </Fragment>
    )
}

export default InputSelector