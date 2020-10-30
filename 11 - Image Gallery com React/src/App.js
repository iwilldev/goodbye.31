import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Unsplash, { toJson } from 'unsplash-js';

import './App.css';

function App(props) {

  const [query, setQuery] = useState()
  const [images, setImages] = useState([]);
  
  const unsplash = new Unsplash({ accessKey: `${process.env.REACT_APP_ACCESS_KEY}` });

  useEffect(() => {
    if (props.location.images) {
      setImages(props.location.images)
    }
  })

  return (

    <div className="app">
      <header className="app-header">
        <h1>galeria reativa</h1>
        <form onSubmit={(event) => {
          event.preventDefault();
          props.location.images = null;
          unsplash.search.photos(query, 1, 20, {})
          .then(toJson)
          .then(json => {setImages(json.results)});
        }}>
          <input 
            type="text" 
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
            }}
          />
          <button type="submit">Buscar</button>
        </form>
        
      </header>
        {
          images.length 
          ? <div className="image-container">
            { images.map(image => {
              return (
              <div key={image.id} className="image-item">
                <Link to={{
                    pathname: `/view/${image.id}`, 
                    image: image,
                    imageList: images
                }}>
                  <img src={image.urls.small} alt={image.description} />
                </Link>
                <div className="author">
                  <h4>{image.user.username}</h4>
                  <img src={image.user.profile_image.medium} alt={image.user.username} />
                </div>
              </div>
            )})}
          </div>
          : <h3>Faça uma busca na barra acima</h3>
        }
    </div>
  );
}

export default App;
