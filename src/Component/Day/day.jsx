import { DayContainer, DayName, DayOpenList } from './day.style'

const Day = ({ day }) => {

    const { name, lunch, dinner } = day

    return (
        <DayContainer>
            <DayName>{name}</DayName>
            <DayOpenList>
                <p>{lunch}</p>
                <p>{dinner}</p>
            </DayOpenList>
        </DayContainer>
    )
}

export default Day