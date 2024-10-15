import React, {useEffect, useState} from "react";
import "../../styles/home.css";

export const Home = () => {

	const mapData = (data, group) => {
		return data.map((item) => {
			let url = `https://starwars-visualguide.com/assets/img/${group}/${item.uid}.jpg`
			let path = `${group}/${item.uid}`
			return (
				<div className="col-4 bg-black singleCard mb-5" key={item.uid}>
					<div className="card bg-black">
						<img src={url} className="card-img-top bg-black" alt={item.name} />
						<div className="card-body bg-black"></div>
						<h5 className="card-title text-warning">{item.name}</h5>
						<div className="d-flex justify-content-between">
							<a href={path} className="btn btn-warning learnBtn m-2">Learn more!</a>
							<button className="favBtn btn btn-warning m-2">♡</button>
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
