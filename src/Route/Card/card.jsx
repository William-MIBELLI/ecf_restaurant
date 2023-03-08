import { CardContainer, Title } from './card.style'
import { useSelector } from 'react-redux'
import {  getDessertSelector, getMainSelector, getStarterSelector } from '../../store/card/card.selector'
import Plate from '../../Component/Plate/plate'
import { Fragment } from 'react'
import Header from '../../Component/Header/header'
import PageContainer from '../../Component/Page-Container/pageContainer'


const Card = () => {

    const starters = useSelector(getStarterSelector)
    const mains = useSelector(getMainSelector)
    const desserts = useSelector(getDessertSelector)
    const headerContent = {
        imgUrl:'https://images.unsplash.com/photo-1544510808-91bcbee1df55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80',
        h1: 'Notre Carte',
        title: 'La cuisine du chef',
        subTitle:'Une invitation au voyage, dans le respect des saisons et des produits',
        content:'Chaque plat est une rencontre personnelle qui se poursuit au-delà de la table par un environnement préservé et une quiétude cultivée. Réserver une table au Quai antique, c’est faire un deuxième voyage.  Les deux hommes ont à cœur de dévoiler tout le potentiel de chaque ingrédient en imaginant des assiettes aux accords lisibles tout en restant naturels, voire presque bruts. Certains arômes, fragiles et fugaces, sont si subtils qu’ils se savourent presque seuls. Leur noble intention est mise au service d’une expérience de plaisir et de dégustation, sublimée par la maîtrise du geste : une véritable ode à l’incroyable savoir-faire de la nature.'
    }
    
    return (
        <Fragment>
            <Header headerContent={headerContent}/>
            <PageContainer>
                <CardContainer>
                    <Title>Nos Entrées</Title>
                    {starters.map((item, index) => 
                        <Plate key={item.id} item={item} index={index}/>
                    )}
                    <Title>Nos Plats</Title>
                    {mains.map((item, index) => 
                        <Plate key={item.id} item={item} index={index}/>
                    )}
                    <Title>Nos Desserts</Title>
                    {desserts.map((item, index) => 
                        <Plate key={item.id} item={item} index={index}/>
                    )}
                </CardContainer>
            </PageContainer>
        </Fragment>
    )
}

export default Card