import styled, {createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    background: #3d3d3d;
    color: #eee;
    font-family: monospace, sans-serif;
    font-size: 16px;  
  }
`

interface borderRadiusProps {
  borderRadius: {
    topLeft?: string;
    bottomLeft?: string;
    topRight?: string;
    bottomRight?: string;
  }
  
}

export const Container = styled.div<borderRadiusProps>`

  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

  header {
    margin-top: 40px;
    text-align: center;    
  }
  main {
   display: flex;
   justify-content: space-between;
   margin-top: 40px;

   .left-column, .right-column{     
     display: flex;
     flex-direction: column;
     justify-content: space-between;

     input {
       width: 30px;
       height: 20px;
       border: 0;
       background:  #292929;
       color: #fff;       
     }
   }

   .center-column {
     width: 80%;
     border: 1px solid #ccc;
     background: #e9eaee;
     height: 400px;
     padding: 40px;
     border-top-left-radius: ${props => props.borderRadius.topLeft ? props.borderRadius.topLeft + "px" : 0};
     border-bottom-left-radius: ${props => props.borderRadius.bottomLeft ? props.borderRadius.bottomLeft + "px" : 0};
     border-top-right-radius: ${props => props.borderRadius.topRight ? props.borderRadius.topRight + "px" : 0};
     border-bottom-right-radius: ${props => props.borderRadius.bottomRight ? props.borderRadius.bottomRight + "px" : 0};

     textarea {
       height: 318px;
       width: 526px;
       resize: none;
     }
   }
  }

`;