import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const id = [params.theid]

	const [item, setItem] = useState()
	
	useEffect(() => {fetch(`https://www.swapi.tech/api/${props.group}/${id}`)
	.then(resp => resp.json())
	.then(data => setItem(data.result.properties))}, [])

	return (
		<div className="jumbotron">
			<p onClick={() => console.log(item)}>Try this</p>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
