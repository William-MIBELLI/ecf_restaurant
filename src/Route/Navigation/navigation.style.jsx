import styled from 'styled-components'

export const NavigationContainer = styled.div`
    background: black;
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
`

export const Brand = styled.span`
    font-size: 2.5rem;
    margin-right: auto;
    margin-left: 30px;
    font-family: 'Great Vibes', cursive;
    
    a{
        color: #D5CEA3;
    }
`