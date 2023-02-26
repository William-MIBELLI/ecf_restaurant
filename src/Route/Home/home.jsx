import {  LunchDescriptionContainer, ImgContainer, LunchSideContainer, MenuArticle, MenuDesciptionContainer } from './home.style'
import  headerImg from '../../Asset/Images/restaurant_home_bg.jpg'
import lunch from '../../Asset/Images/lunch.jpg'
import menu from '../../Asset/Images/menu.jpg'
import { Fragment } from 'react'
import Description from '../../Component/Description/description'
import Button from '../../Component/Button/button'
import { useNavigate } from 'react-router-dom'
import Header from '../../Component/Header/header'
import PageContainer from '../../Component/Page-Container/pageContainer'


const Home = () => {

    const navigate = useNavigate()
    const headerContent = {
        imgUrl: headerImg,
        h1: 'Le Quai Antique',
        title:'Une expérience gustative singulière et poétique “de l’écorce à l’âme”',
        subTitle:'UNE ÉTOILE AU GUIDE MICHELIN ET UNE ÉTOILE VERTE GASTRONOMIE DURABLE',
        content: 'Au Jardin de Berne*, les chefs Louis Rameau et Eric Raynal cherchent une vérité cachée dans chaque ingrédient pour créer des associations nouvelles, des accords inédits, des textures surprenantes tout en respectant l’intention initiale portée par la nature.“ Nous travaillons l’entièreté du produit. Un choix pour nous approcher davantage de son intimité… et une vraie source d’inspiration, pour une table renouvelée au gré des saisons ”, souligne Louis Rameau. '
    }


    const clickMenuHandler = () => {
        navigate('/menu')
    }

    const clickCardHandler = () => {
        navigate('/card')
    }

    return (
        <Fragment>
            <Header headerContent={headerContent}/>
            <PageContainer>
                <LunchDescriptionContainer>
                    <ImgContainer src={lunch}></ImgContainer>
                    <LunchSideContainer>
                        <Description 
                            title='La cuisine du chef'
                            subTitle='La magie du naturel'
                            content='
                            Chaque plat est une rencontre personnelle qui se poursuit au-delà de la table par un environnement préservé et une quiétude cultivée. Réserver une table au Jardin de Berne*, c’est faire un deuxième voyage.  Les deux hommes ont à cœur de dévoiler tout le potentiel de chaque ingrédient en imaginant des assiettes aux accords lisibles tout en restant naturels, voire presque bruts. '
                        />
                        <Button clickHandler={clickCardHandler}>La carte</Button>
                    </LunchSideContainer>
                </LunchDescriptionContainer>
                <MenuArticle imgUrl={menu}>
                    <MenuDesciptionContainer>
                        <Description 
                            title={'Une démarche durable'}
                            subTitle='Simplement raffinée'
                            content='Au détour d’un massif de lavande, on découvre les trois potagers du domaine. Sur plus de 3000 m2, légumes, baies, fruits, plantes aromatiques et fleurs sont cultivés dans le respect de l’agriculture biologique.

    On compte également quatre mille oliviers qui produisent l’huile d’olive signée Berne, réputée pour son fruité vert.'
                        />
                        <Button clickHandler={clickMenuHandler}>Le menu</Button>
                    </MenuDesciptionContainer>
                </MenuArticle>

            </PageContainer>
        </Fragment>
    )
}

export default Home