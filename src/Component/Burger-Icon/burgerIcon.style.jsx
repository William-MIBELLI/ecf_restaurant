import styled from "styled-components";

export const BurgerContainer = styled.div`
    position: absolute;
    right: 15px;
    width: 40px;
    display: none;
    pointer: cursor;
    
    &:before,
    &:after,
    & div{
        background: #fff;
        content: "";
        display: block;
        height: 5px;
        border-radius: 3px;
        margin: 6px 0;
        transition: 0.5s;
    }

    &:hover:before {
        transform: translateY(12px) rotate(135deg);
    }
    &:hover:after {
        transform: translateY(-12px) rotate(-135deg);
    }
    &:hover div {
        transform: scale(0);
    }

    @media screen and (max-width: 768px){
        display: block;
    }
`

