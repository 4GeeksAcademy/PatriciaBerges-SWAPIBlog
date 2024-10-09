import React, {useEffect, useState} from "react";
import "../../styles/home.css";

export const Home = () => {

	const mapData = (data) => {
		return data.map((item) => {
			return (
				<div key={item.uid}>
					<p>{item.name}</p>
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
		<div className="container d-flex">
			<div className="m-3">{mapData(people)}</div>
			<div className="m-3">{mapData(planets)}</div>
			<div className="m-3">{mapData(vehicles)}</div>
		</div>
	)
}
