import { PlanningContainer } from './planning.style'
import { useSelector } from 'react-redux'
import { getScheduleSelector } from '../../store/schedule/schedule.selector'
import Day from '../Day/day'

const Planning = () => {

    const schedule = useSelector(getScheduleSelector)
    console.log('planning : ', schedule)

    return (
        <PlanningContainer>
            {schedule.map(item =>{
                return(<Day day={item}/>)
            })}
        </PlanningContainer>
    )
}

export default Planning