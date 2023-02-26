import { InputSelectorBase } from './inputSelector.style'

const InputSelector = ({ optionList }) => {
    return (
        <InputSelectorBase>
            {optionList.map((option, index) => {
                return ( <option key={index} value={option}>{option}</option>)
            })}
        </InputSelectorBase>
    )
}

export default InputSelector