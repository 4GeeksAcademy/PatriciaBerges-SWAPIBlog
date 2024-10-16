import React, {useEffect, useState, useContext} from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {

	const { store, actions } = useContext(Context)

	const mapData = (data, group) => {
		return data.map((item) => {
			let url = `https://starwars-visualguide.com/assets/img/${group}/${item.uid}.jpg`
			let path = `/${group}/${item.uid}`
			let favData = [item.name, path]
			const isFav = store.favs.some(fav => fav[0] == item.name)
			return (
				<div className="col-4 bg-black singleCard mb-5" key={item.uid}>
					<div className="card bg-black">
						<img src={url} className="card-img-top bg-black" alt={item.name} />
						<div className="card-body bg-black"></div>
						<h5 className="card-title text-warning">{item.name}</h5>
						<div className="d-flex justify-content-between">
							<Link to={path} className="btn btn-warning learnBtn m-2">Learn more!</Link>
							<button onClick={() => actions.handleFav(favData)} className="favBtn btn btn-warning m-2">{isFav ? '♥' : '♡'}</button>
						</div>
						
					</div>
				</div>
				)
			})
	}

	const [people, setPeople] = useState([])
	const [planets, setPlanets] = useState([])
	const [vehicles, setVehicles] = useState([])

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
		.then(r => r.json())
		.then(data => setPeople(data.results))
	}, [])

	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets")
		.then(r => r.json())
		.then(data => setPlanets(data.results))
	}, [])

	useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles")
		.then(r => r.json())
		.then(data => setVehicles(data.results))
	}, [])

	return (
		<div className="container">
			<h2>CHARACTERS</h2>
			<div className="container m-3 mb-5">
				<div className="row flex-nowrap overflow-auto p-2 slider">
					{mapData(people, "characters")}
				</div>
			</div>
			<h2>PLANETS</h2>
			<div className="container m-3 mb-5">
				<div className="row flex-nowrap overflow-auto p-2 slider">
					{mapData(planets, "planets")}
				</div>
			</div>
			<h2>VEHICLES</h2>
			<div className="container m-3 mb-5">
				<div className="row flex-nowrap overflow-auto p-2 slider">
					{mapData(vehicles, "vehicles")}
				</div>
			</div>
		</div>
	)
}
