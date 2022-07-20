import React from "react";
import Movie from "../images/movie.png";
import "../css/Modal.css";
import { useDispatch, useSelector } from "react-redux";
import { notFound, selectNotFound } from "../features/errorSlice";

function Modal() {
  const dispatch = useDispatch();
  const movieNotFound = useSelector(selectNotFound);

  return (
    <div className="modal" style={{ top: `${movieNotFound ? "25%" : "-50%"}` }}>
      <div className="modal__content">
        <img className="modal__image" src={Movie} alt=":(" />
        <p className="modal__info">Movie trailer not found</p>
      </div>
      <div className="modal__btnContainer">
        <button
          onClick={() => dispatch(notFound(false))}
          className="modal__button"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default Modal;
