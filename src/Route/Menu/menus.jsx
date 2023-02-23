import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Header from '../../Component/Header/header'
import Menu from '../../Component/Menu/menu'
import { getMenuSelector } from '../../store/menu/menu.selector'
import {} from './menus.style'

const Menus = () => {

    const menus = useSelector(getMenuSelector)
    console.log('menus : ', menus)

    const headerContent = {
        imgUrl:'https://images.unsplash.com/photo-1560717845-968823efbee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        h1: 'Nos Menus',
        title: 'Des combinaisons raffinées',
        subTitle: 'Un assortiment de plats mûrement réfléchis, afin de vous offrir le meilleur de nos cuisines',
        content: 'Le restaurant gastronomique vous propose une carte des vins très riche représentant toutes les régions de France et quelques vins étrangers aussi. Elle fait bien sûr la part belle aux vins de notre belle région et aux Côtes de Provence, blanc, rouge ou rosé, du Domaine du Château de Berne.'
    }

    return (
        <Fragment>
            <Header headerContent={headerContent}/>
            {menus.map(item => {
                return (<Menu menu={item}/>)
            })}
        </Fragment>
    )
}

export default Menus