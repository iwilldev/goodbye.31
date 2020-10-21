import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

import './app.css';

import reactLogo from './react-original.svg';
import cssLogo from './css3-original.svg';

function App() {

  const [flexboxStyles, setFlexboxStyles] = useState({
      display: "flex",
      flexDirection: "",
      flexWrap: "",
      justifyContent: "",
      alignItems: "",
      alignContent: "",
      padding: ""
  });

  const flexItems = [
    {
      name: "1",
      class: "first-item"
    },
    {
      name: "2",
      class: "second-item"
    },
    {
      name: "3",
      class: "third-item"
    },
    {
      name: "4",
      class: "fourth-item"
    }
  ];
  
  const [printFlexboxProperties, setPrintFlexboxProperties] = useState(``);

  useEffect(() => {
    let catchProperties = ``;
    Object.entries(flexboxStyles).map(property => {
      if (property[1] !== "") {
        catchProperties += `${property[0].replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}: ${property[1]}; <br/>`
      }
      return null;
    })
    setPrintFlexboxProperties(catchProperties);
  }, [flexboxStyles])

  return (
    <div className="app">
      <div className="controller">
        <div className="controller-header">
          <h1>Flexbox Generator</h1>
          <img src={reactLogo} alt="ReactJS"></img>
          <img src={cssLogo} alt="CSS3"></img>
        </div>
        <h3>Selecione as propriedades para o Flexbox</h3>
        <div className=".flexbox-controller">
          <div className="property-container">
            <div className="property-item">
              <p>flex-direction</p>
              <select 
                value={flexboxStyles.flexDirection} 
                onChange={(event) => {
                  setFlexboxStyles((prevStyles) => ({
                    ...prevStyles,
                    flexDirection: event.target.value
                  }))
                }}
              >
                <option value=""></option>
                <option value="row">row</option>
                <option value="row-reverse">row-reverse</option>
                <option value="column">column</option>
                <option value="column-reverse">column-reverse</option>
              </select>
            </div>
            <div className="property-item">
              <p>justify-content</p>
              <select 
                value={flexboxStyles.justifyContent} 
                onChange={(event) => {
                  setFlexboxStyles((prevStyles) => ({
                    ...prevStyles,
                    justifyContent: event.target.value
                  }))
                }}
              >
                <option value=""></option>
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="space-between">space-between</option>
                <option value="space-around">space-around</option>
                <option value="space-evenly">space-evenly</option>
              </select>
            </div>
            <div className="property-item">
              <p>align-items</p>
              <select 
                value={flexboxStyles.alignItems} 
                onChange={(event) => {
                  setFlexboxStyles((prevStyles) => ({
                    ...prevStyles,
                    alignItems: event.target.value
                  }))
                }}
              >
                <option value=""></option>
                <option value="stretch">stretch</option>
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="baseline">baseline</option>
              </select>
            </div>
            <div className="property-item">
              <p>flex-wrap</p>
              <select 
                value={flexboxStyles.flexWrap} 
                onChange={(event) => {
                  setFlexboxStyles((prevStyles) => ({
                    ...prevStyles,
                    flexWrap: event.target.value
                  }))
                }}
              >
                <option value=""></option>
                <option value="nowrap">nowrap</option>
                <option value="wrap">wrap</option>
                <option value="wrap-reverse">wrap-reverse</option>
              </select>
            </div>
            <div className="property-item">
              <p>align-content</p>
              <select 
                value={flexboxStyles.alignContent} 
                onChange={(event) => {
                  setFlexboxStyles((prevStyles) => ({
                    ...prevStyles,
                    alignContent: event.target.value
                  }))
                }}
              >
                <option value=""></option>
                <option value="stretch">stretch</option>
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="space-between">space-between</option>
                <option value="space-around">space-around</option>
              </select>
            </div>
            <div className="property-item">
              <p>padding</p>
              <select 
                value={flexboxStyles.padding} 
                onChange={(event) => {
                  setFlexboxStyles((prevStyles) => ({
                    ...prevStyles,
                    padding: event.target.value
                  }))
                }}
              >
                <option value=""></option>
                <option value="2.5%">2.5%</option>
                <option value="5%">5%</option>
                <option value="10%">10%</option>
                <option value="15%">15%</option>
                <option value="20%">20%</option>
              </select>
            </div>
          </div>
        </div>
        <a href="https://omagotemum.site" target="_blank" rel="noopener noreferrer">Made by Mago</a>
        <a href="https://origamid.com/projetos/flexbox-guia-completo/" target="_blank" rel="noopener noreferrer">Guia completo de Flexbox (Origamid)</a>
      </div>
      
      <div className="output">
        <div className="output-view" style={flexboxStyles}>
          {
            flexItems.map(flexItem => {
              return <p className={flexItem.class}>{flexItem.name}</p>
            })
          }
        </div>
        <div className="output-code">
          <p>{`.flex-box {`}</p>
          <p className="output-code-text">{ ReactHtmlParser(printFlexboxProperties) }</p>
          <p>{`}`}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
