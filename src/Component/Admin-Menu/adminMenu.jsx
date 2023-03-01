
import { useSelector } from 'react-redux'
import { getMenuSelector } from '../../store/menu/menu.selector'
import AdminCategory from '../Admin-Category/adminCategory'
import {} from './adminMenu.style'

const AdminMenu = ({  title, type }) => {

    const menus = useSelector(getMenuSelector)

    return (
        <AdminCategory title={title} content={menus} type={type} creationButton={true}/>
    )
}

export default AdminMenu