import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black mb-3">
			<Link to="/">
				<img className="logo ms-5" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FStar_Wars_Logo.svg%2F2560px-Star_Wars_Logo.svg.png&f=1&nofb=1&ipt=acac9911010525a51a7e6da1b1838e8ff2e432f4922b8aa717caac120c975908&ipo=images"></img>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
