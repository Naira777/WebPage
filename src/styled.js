import styled from "styled-components"

export const Content = styled.div`

display: grid;
height: 200%;
grid-template-areas:
  "header"
  "about"
  "contact"
  "footer";
grid-template-rows: 100px 800px  900px 0;
`

export const Links = styled.div`

background: #EDF2F2;
box-shadow: 0px 3px 9px #387dff80;
display: flex;
justify-content: space-around;
padding-left: 50px;
align-items: center;
`

export const Link = styled.div`

color:#AFB0B0;
font-size: 25px;
letter-spacing: 3px;
font-weight: 500;
 &:hover {
  box-shadow: 3px 3px 2px  1px #497EF733;
 color: white;

}`

export const About = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
 
`;


export const Contact = styled.div`
display: flex;
flex-direction: column;
align-items: center;
letter-spacing: 2px;

`

export const Box = styled.input`

box-shadow: 2px 2px 10px  #C9D6DA;
width: 550px;
height: 50px;
margin-bottom: -20px;

border: none;

&:focus {
    outline: none;   
   border: 0.1px solid #BBC4CF;
}
`

export const BoxText = styled.textarea`
//border: 0.1px solid #94A4A9;
box-shadow: 2px 1px 10px  #C9D6DA;
width: 550px;
height: 120px;
border: none;
&:focus {
    outline: none;
   border: 0.1px solid #BBC4CF;
}
 

`
export const Header = styled.p`
font-size: 30px;
color: #7CB7B7;
font-weight: 600;
letter-spacing: 0px;


`
export const Text = styled.p`
font-size: 16px;
color: #7B7D7E;
letter-spacing: 1px;
margin-left: 10px;
transform: translate(-255px, 18px);
`

export const Button = styled.button`

background: #7CB7B7;
width: 130px;
height: 50px;
margin-top: 20px;
border: none;

&:focus{
    outline: none;
    background: #12CBCB;
   
}
&:hover {
   transform: scale(1.03);
    box-shadow: 2px 5px 5px #648383;
}
`
export const T = styled.p`
font-size: 15px;
color: #ffffff;
font-weight: 600;
letter-spacing: 1px;


`
