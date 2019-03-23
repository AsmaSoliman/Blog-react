import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'


const Card = (props) => {
  const { title, id, input } = props;
  return (
    <div className="my-card col-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={`/${input}s/${id}`} className="btn btn-primary">View {input}</Link>
      </div>
    </div>
  );
}


export default Card;