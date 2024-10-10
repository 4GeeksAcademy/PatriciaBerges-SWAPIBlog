import React, {useEffect, useState} from "react";
import "../../styles/home.css";

export const Home = () => {

	const mapData = (data) => {
		return data.map((item) => {
						return (
							<div class="col-4 bg-white text-black singleCard" key={item.uid}>
								<h5>{item.name}</h5>
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
			<div class="container">
				<div class="row flex-nowrap overflow-auto">
					{mapData(people)}
				</div>
			</div>
			<div className="m-3">{mapData(people)}</div>
			<div className="m-3">{mapData(planets)}</div>
			<div className="m-3">{mapData(vehicles)}</div>
		</div>
	)
}
