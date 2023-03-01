import { useState } from 'react'
import { AdminCategoryContainer, AdminCategoryContent, Icon, AdminCategoryHeader, TitleContainer, IconContainer  } from './adminCategory.style'
import arrow from '../../Asset/Icons/arrow.png'
import AdminItem from '../Admin-Item/adminItem'
import newIcon from '../../Asset/Icons/new.png'
import AdminCreation from '../Admin-Creation/AdminCreation'
import { getEmptyObject } from '../../Services/helper'

const AdminCategory = ({ title, content, type, creationButton = false }) => {

    const [ displayContent, setDisplayContent ] = useState(false)
    const [ displayCreation, setDisplayCreation ] = useState(false)

    const onArrowClick = () => {
        setDisplayContent(!displayContent)
    }

    const onCreateClick = () => {
        setDisplayCreation(!displayCreation)
    }

    return (
        <AdminCategoryContainer>
            <AdminCategoryHeader>
                <TitleContainer>
                    {title}
                </TitleContainer>
                <IconContainer>
                    { creationButton && (
                        <Icon src={newIcon} onClick={onCreateClick}/>
                    )}
                    <Icon src={arrow} onClick={onArrowClick}/>
                </IconContainer>
            </AdminCategoryHeader>
            { displayCreation && (
                <AdminCreation emptyObject={getEmptyObject(content[0])} type={type} state={content}/>
            )}
            {displayContent && (
                <AdminCategoryContent>
                    {content.map(item => (<AdminItem key={item.id} item={item} type={type} state={content}/>))}
                </AdminCategoryContent>
            )}
        </AdminCategoryContainer>
    )
}

export default AdminCategory