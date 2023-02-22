import { BaseDescription } from './description.style'

const Description = ({ title, subTitle, content}) => {

    return (
        <BaseDescription>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
            <p>{content}</p>
        </BaseDescription>
    )
}

export default Description