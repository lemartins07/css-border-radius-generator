import { ChangeEvent, useState } from 'react';

import { Container, GlobalStyle } from './styles';

interface borderRadiusProps {
  topLeft: string;
  bottomLeft: string;
  topRight: string;
  bottomRight: string;
}

function App():JSX.Element {
  
  const [borderRadiusValues, setBorderRadiusValues] = useState({} as borderRadiusProps);
  const [cssResult, setCssResult] = useState('');
  
  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    //console.log(e);
    const { name, value } = e.target;    

    setBorderRadiusValues({
      ...borderRadiusValues, 
      [name]: value 
    });

    showCssCode();
  }

  const showCssCode = () => {
    const cssCode =` 
      ${borderRadiusValues.topLeft ? "border-top-left-radius: " + borderRadiusValues.topLeft + "px" : ''};
      ${borderRadiusValues.bottomLeft ? "border-bottom-left-radius: " + borderRadiusValues.bottomLeft + "px" : ''};
      ${borderRadiusValues.topRight ? "border-top-right-radius: " + borderRadiusValues.topRight + "px" : '' };
      ${borderRadiusValues.bottomRight ? "border-bottom-right-radius: " + borderRadiusValues.bottomRight + "px" : ''}
    `;

    setCssResult(cssCode);
  }

  return (
    <>
      <GlobalStyle />
      <Container className="container" borderRadius={borderRadiusValues}>
        <header>
          <h1>Border radius</h1>
          <span>a service by the lemartins07 company</span>
        </header>
        <main>
          <div className="left-column">
            <input name="topLeft" type="text" tabIndex={1} onChange={handleInputChange}/>
            <input name="bottomLeft" type="text" tabIndex={3} onChange={handleInputChange}/>          
          </div>
          <div className="center-column" id="center-column">
            <textarea name="cssResult" readOnly value={cssResult} />
          </div>
          <div className="right-column">
            <input name="topRight" type="text" tabIndex={2} onChange={handleInputChange}/>
            <input name="bottomRight" type="text" tabIndex={4} onChange={handleInputChange}/> 
          </div>
        </main>
      </Container>      
    </>
  );
}

export default App;
