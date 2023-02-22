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

export const IntroContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: left;
    background-color: white;
    padding: 20px;
`

export const LunchDescriptionContainer = styled.article`
    min-height: 500px;
    width: 70%;
    margin: 40px auto;
    display: flex;
     
`

export const ImgContainer = styled.img`
    width: 70%;
    height: 100%;
    margin-right: 10px;
    background-color: red;
`
export const LunchSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MenuArticle = styled.article`
    width: 70%;
    min-height: 600px;
    margin: 120px auto;
    background-image: url(${props => props.imgUrl});
    background-size: 100%;
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


