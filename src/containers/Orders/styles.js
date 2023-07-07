import styled from "styled-components"

import Background from "../../assets/background.svg"

export const Container = styled.div`
  background: url(${Background});
  background-size: cover;

   
  height: 100vh;
  min-height: 100vh;
  width: 414px;
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
`;


export const Image = styled.img`
  margin-top: 15px;

`;

export const H1 = styled.h1`
  width: 213px;
  height: 33px;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  
  margin-top: 10px;
  margin-bottom: 50px;
  padding-left: 5px;
`;

export const InputLabel = styled.p`
  width: 55px;
  height: 22px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: rgba(238, 238, 238, 1);
  padding-left: 50px;
  align-items: center;
  text-align: left;
  margin-right: 325px;
  margin-bottom: -13px;
`;

export const Input = styled.input`
  border-radius: 42px;
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  padding-left: 25px;
  margin-bottom: 34px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.14);
  font-size: 25px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  &:hover{
    opacity:0.8;
  }
  &:active{
    opacity:0.5;
  }
`;

export const User = styled.li`
  color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 42px;
  width: 342px;
  height: 102px;
  background: rgba(255, 255, 255, 0.25);
  font-size: 18px;
  padding-left: 25px;
  margin-bottom: 34px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
  
  p{
    margin: 0;

  }

  button{
    cursor: pointer;
    background: none;
    border: none;
  }
`;



