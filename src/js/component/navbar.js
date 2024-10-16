import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context)


	return (
		<nav className="navbar navbar-light bg-black mb-3">
			<Link to="/">
				<img className="logo ms-5" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FStar_Wars_Logo.svg%2F2560px-Star_Wars_Logo.svg.png&f=1&nofb=1&ipt=acac9911010525a51a7e6da1b1838e8ff2e432f4922b8aa717caac120c975908&ipo=images"></img>
			</Link>
			<div className="ml-auto">
				<div className="dropdown me-5">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites: {store.favs.length}
					</button>
					<ul className="dropdown-menu">
						{store.favs.map((item, index) => {
							return (
								<li key={index}>
									<Link className="dropdown-item" to={item[1]}>{item[0]}</Link>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
