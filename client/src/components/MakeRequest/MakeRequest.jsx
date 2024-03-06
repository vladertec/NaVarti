import React from 'react';
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const MakeRequest = ({ RequestItems }) => {
  const requestButtonClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="make-request">
      <div className="make-request__container">
        <p className="make-request__title">Зробити запит</p>
        <div className="make-request__card-container">
          {RequestItems.map((item, index) => (
            <div className="make-request__card" key={index}>
              <img
                className="make-request__card-img"
                src={item.photoUrl}
                alt={item.photoUrl}
              />
              <h2 className="make-request__card-name">{item.title}</h2>
              <p className="make-request__card-position">{item.position}</p>
              <p className="make-request__card-text">{item.text}</p>
              <button className="make-request__btn" onClick={() => requestButtonClick(item.link)}>
                Заповнити форму{" "}
                <ModeEditIcon className="make-request__btn-icon" />{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MakeRequest;
