import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/card.css"

export const PlanetView = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => actions.fetchPlanetsData(params.theid), [store.planetData]);

    return (
        <div className="cardBack d-flex h-75 p-4 m-4 border border-warning border rounded">
            <img
                src={
                    "https://starwars-visualguide.com/assets/img/planets/" +
                    params.theid +
                    ".jpg"
                }
                className="card-img-left border border-light border rounded"
                alt="..."
            ></img>
            <div className="planData p-4" style={{ color: "white" }}>
                <h4>{store.planetData.name}</h4>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
                    perspiciatis! Voluptas nulla quibusdam eum ducimus? Quia distinctio
                    odit ut nam exercitationem quibusdam doloribus quisquam, reprehenderit
                    saepe nihil molestias nemo fuga.
                </p>
                <hr className="my-4" />
                <h6><u>Data table</u></h6>
                <ul className="d-flex text-center">
                    <li
                        className="list-group-item d-flex bg-dark border border-warning textCard"

                    >
                        Diameter:<br></br>
                        {store.planetData.diameter}
                    </li>
                    <li
                        className="list-group-item d-flex bg-dark border border-warning textCard"

                    >
                        Rotation Period:<br></br>
                        {store.planetData.rotation_period}
                    </li>
                    <li
                        className="list-group-item d-flex bg-dark border border-warning textCard"

                    >
                        Orbital Period:<br></br>
                        {store.planetData.orbital_period}
                    </li>
                    <li
                        className="list-group-item d-flex bg-dark border border-warning textCard"

                    >
                        Gravity:<br></br>
                        {store.planetData.gravity}
                    </li>
                    <li
                        className="list-group-item d-flex bg-dark border border-warning textCard"

                    >
                        Population:<br></br>
                        {store.planetData.population}
                    </li>
                    <li
                        className="list-group-item d-flex bg-dark border border-warning textCard"

                    >
                        Climate:<br></br>
                        {store.planetData.climate}
                    </li>
                    <li
                        className="list-group-item d-flex bg-dark border border-warning textCard"

                    >
                        Terrain:<br></br>
                        {store.planetData.terrain}
                    </li>
                    <li
                        className="list-group-item d-flex bg-dark border border-warning textCard"

                    >
                        Surface Water:<br></br>
                        {store.planetData.surface_water}
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

PlanetView.propTypes = {
    match: PropTypes.object,
};

