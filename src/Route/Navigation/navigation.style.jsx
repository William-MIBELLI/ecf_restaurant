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
`

export const PageContainer = styled.div`
    padding-bottom: 300px;
`