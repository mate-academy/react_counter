import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = ({ id, title, description, image, created, amvID }) => (
  <div className="dog">
    <h1 className="title">Doggo Dogg</h1>
    <div className="card">
      <div className="card-id">
        {id}
      </div>
      <div className="media-content">
        <p className="title is-8">{title}</p>
      </div>
      <div className="content">
        {description}
        <a href={image}>IMG</a>
      </div>
      <p>{created}</p>
      <p>{amvID}</p>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  amvID: PropTypes.string.isRequired,
};
