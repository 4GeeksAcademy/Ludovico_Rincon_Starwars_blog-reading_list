import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const ShipCard = ({ name, id, item }) => {
    const { actions } = useContext(Context);
    const viewType = "/shipview/";
    return (
        <div className="card mx-1 bg-black text-white" style={{ width: "18rem" }}>
            <img src={"https://starwars-visualguide.com/assets/img/starships/" + (id) + ".jpg"} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">some StarWars spacecraft</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <Link to={viewType + id} className="btn btn-outline-warning">Learn more!</Link>
                <button className="btn btn-outline-danger" onClick={() => actions.addFavorite({ name, id, item, viewType })}><i className="fa fa-heart" /></button>
            </div>
        </div>
    )
}