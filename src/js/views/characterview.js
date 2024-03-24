import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css"

export const CharacterView = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => actions.fetchCharactersData(params.theid), [store.characterData]);

  return (
    <div className="cardBack d-flex h-75 p-4 m-4 border border-warning border rounded">
      <img
        src={
          "https://starwars-visualguide.com/assets/img/characters/" +
          params.theid +
          ".jpg"
        }
        className="card-img-left border border-light border rounded"
        alt="..."
      ></img>
      <div className="p-4 textCard">
        <h4>{store.characterData.name}</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
          perspiciatis! Voluptas nulla quibusdam eum ducimus? Quia distinctio
          odit ut nam exercitationem quibusdam doloribus quisquam, reprehenderit
          saepe nihil molestias nemo fuga.
        </p>
        <hr className="my-4" />
        <h6>
          <u>Data table</u>
        </h6>
        <ul className="d-flex text-center">
          <li
            className="list-group-item d-flex bg-dark border border-warning textCard"
          >
            Height:<br></br>
            {store.characterData.height}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning textCard"
          >
            Mass:<br></br>
            {store.characterData.mass}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning textCard"
          >
            Gender:<br></br>
            {store.characterData.gender}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning textCard"
          >
            Birth Year:<br></br>
            {store.characterData.birth_year}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning textCard"
          >
            Hair Color:<br></br>
            {store.characterData.hair_color}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning textCard"
          >
            Skin Color:<br></br>
            {store.characterData.skin_color}
          </li>
          <li
            className="list-group-item d-flex bg-dark border border-warning textCard"
          >
            Eye Color:<br></br>
            {store.characterData.eye_color}
          </li>
        </ul>
        <hr className="my-4" />

        <Link to="/">
          <span className="btn btn-outline-warning" href="#" role="button">
            Back home
          </span>
        </Link>
      </div>
    </div>
  );
};

CharacterView.propTypes = {
  match: PropTypes.object,
};
