import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const id = params.theid

	const [item, setItem] = useState({name: ""})
	
	useEffect(() => {fetch(`https://www.swapi.tech/api/${props.group}/${id}`)
	.then(resp => resp.json())
	.then(data => setItem(data.result.properties))}, [props.group, id])


	const imgLink = (group) => {
		if(group == "people"){
			return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
		}
		else return `https://starwars-visualguide.com/assets/img/${group}/${id}.jpg`
	}

	const mapItem = (item) => {
		return Object.keys(item).map((property, index) => {
			return (
			<li key={index}>
				{property}: {item[property]}
			</li>
		)	
		})
	}

	return (
		<div className="jumbotron">
			<div className="sheet m-5">
				<div className="basicInfo d-flex">
					<img onClick={() => console.log(item.name)} className="sheetPic" src={imgLink(props.group)}></img>
					<div className="justify-content-center info">
						<h1>{item.name}</h1>
						<p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ac quisque condimentum rutrum sollicitudin nostra volutpat habitant fusce. Sagittis consequat ridiculus hendrerit in eros duis. Porta id sed litora justo; maximus nec est lacus.</p>
					</div>
				</div>
				<div className="basicInfo">
					<ul>
						{mapItem(item)}
					</ul>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
