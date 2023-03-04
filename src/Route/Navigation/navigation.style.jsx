import styled from 'styled-components'

export const NavigationContainer = styled.div`
    background: black;
    position: sticky;
    top: 0;
    width: 100%;
    height: 60px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #E5E5CB;

    a{
        text-decoration: none;
    }

    @media screen and (max-width: 768px){
        position: relative;
    }
`

export const NavLinksContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width : 768px){
        display: none;
    }
`

export const NavLinksVerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    width: 100%;
    height: auto;
    background-color: black;
    justify-content: center;
    align-items: center;
    
    a{
        margin: 5px 0;
    }
`

export const Brand = styled.span`
    font-size: 2.5rem;
    margin-right: auto;
    margin-left: 30px;
    font-family: 'Great Vibes', cursive;
    letter-spacing: -12px;
    
    a{
        color: #D5CEA3;
    }
    a:hover{
        color: white;
    }

    @media screen and (max-width: 768px){
        a{
            font-size: 40px;
        }
    }
`

export const BodyContainer = styled.div`
    padding-bottom: 300px;

    @media screen and (max-width: 500px){
        padding-bottom: 500px;
    }
`