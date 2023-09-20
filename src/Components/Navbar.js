import React from "react";
import "./Navbar.css";

export default function Navbar({ count, search, setSearch }){
	return (
		<nav className="nav-bar">
			<div>
				<h3>Home</h3>
			</div>
			<div>
				<input className="search" type="text" placeholder="Search" value={search} onChange={(e) => {
					setSearch(e.target.value);
				}} />
			</div>
			<div>
				<p>Found <strong>{count}</strong> results</p>
			</div>
		</nav>
	)
}
