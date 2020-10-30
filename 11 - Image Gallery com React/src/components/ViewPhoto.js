import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './ViewPhoto.css'

function ViewPhoto(props) {

  const image = props.location.image;
  const imageList = props.location.imageList;

  return (
    <div className="view-photo">
      {
        props.location.image ? 
        <>
          <header className="view-photo-header">
            <h3>{image.alt_description}</h3>
            <Link to={{
                    pathname: `/`, 
                    images: imageList
            }}>Voltar</Link>
          </header>
          <div className="image-view">
            <a href={image.urls.full} target="_blank" rel="noopener noreferrer">
              <img src={image.urls.regular} alt={image.alt_description} />
            </a>
          </div>
          <div className="author">
            <div className="author-data">
              <h4>{image.user.username}</h4>
              { image.user.portfolio_url 
                ? <a href={image.user.portfolio_url}>Portfólio</a>
                : image.user.instagram_username 
                ? <a href={`https://instagram.com/${image.user.instagram_username}`}>{image.user.instagram_username}</a> 
                : image.user.twitter_username 
                ? <a href={`https://twitter.com/${image.user.twitter_username}`}>{image.user.twitter_username}</a>
                : null
              }
            </div>
            <img src={image.user.profile_image.medium} alt={image.user.username} />
          </div>
        </>
        : null
      } 
    </div>
  );
}

export default ViewPhoto;