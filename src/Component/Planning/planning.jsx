import { PlanningContainer } from './planning.style'
import { useSelector } from 'react-redux'
import { getScheduleSelector } from '../../store/schedule/schedule.selector'
import Day from '../Day/day'

const Planning = () => {

    const schedule = useSelector(getScheduleSelector)

    return (
        <PlanningContainer>
            {schedule.map(item =>{
                return(<Day day={item} key={item.name}/>)
            })}
        </PlanningContainer>
    )
}

export default Planning