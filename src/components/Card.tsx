import React, { FC } from 'react';

const Card: FC = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src="" />
      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Text
        </p>
        <a href="#" className="btn btn-primary">
          Text
        </a>
      </div>
    </div>
  );
}

export default Card;