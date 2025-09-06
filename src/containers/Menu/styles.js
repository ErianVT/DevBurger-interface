import styled from "styled-components";
import BannerHamburger from "../../assets/banner_cardapio.svg";
import Background from '../../assets/background-login2.svg';
import { Link } from "react-router-dom";


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color:  ${(props) => props.theme.white};
   background:linear-gradient(
          rgba(255,255,255,0.5),
          rgba(255,255,255,0.5)
      ), url('${Background}');
  
  `;

export const Banner = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;
    margin-bottom: 20px;

    background: url('${BannerHamburger}') no-repeat;
    background-position: center;
    background-color:  ${(props) => props.theme.mainBlack};
    background-size: cover;

    h1{
     font-family: "RoadRage", sans-serif;
     font-size: 80px;
     line-height: 60px;
     color:  ${(props) => props.theme.white};
     position: absolute;
     right: 10%;
     top:30%;

     span {
        display: block;
        color:  ${(props) => props.theme.white};
        font-size: 20px;
     }
    }

    `;

export const CategoryMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => props.$isActiveCategory ? (props) => props.theme.purple : '#696969'};
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 5px;
    line-height: 20px;
    border: none ;
    border-bottom:${props => props.$isActiveCategory && `3px solid  ${(props) => props.theme.purple}`};
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto;
`;

export const ButtonHome = styled(Link)`
 background-color:  ${(props) => props.theme.purple};
    width: 100%;
    height:52px;
    border: 0;
    border-radius: 5px;
    font-size: 30px;
    color:  ${(props) => props.theme.white};
    border: none;
    text-decoration: none;
    padding: 10px;
    border-radius: 20px;
    margin: 10px;
    
    &:hover{
        background-color: ${(props) => props.theme.secondDarkPurple};
    }
`
