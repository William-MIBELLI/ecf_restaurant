import styled from "styled-components";

export const HomeHeader = styled.div`
    background-image: url(${props => props.imgUrl});
    background-size: 100%;
    background-position: center;
    height: 600px;

    h1{
        font-size: 9rem;
        font-weight: normal;
        color: white;
        font-family: 'Great Vibes', cursive;
        padding-top: 80px;
        padding-left: 80px;
    }
`

export const LunchDescriptionContainer = styled.article`
    min-height: 500px;
    margin: 40px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
     
     @media screen and (max-width: 1100px){
        flex-direction: column;
     }
`

export const ImgContainer = styled.img`
    width: 70%;
    height: 100%;
    margin-right: 10px;
    background-color: red;
    @media screen and (max-width: 1100px){
       width: 100%;
     }
`
export const LunchSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MenuArticle = styled.article`
    min-height: 600px;
    margin: 120px auto;
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const MenuDesciptionContainer = styled.div`
    width: 50%;
    background-color: white;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 20px;

`



