import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	
	return (
		<nav className="navbar navbar-light bg-light mb-3 back">
			<Link to="/">
			<img className='logo' src='https://th.bing.com/th/id/OIP.vqcdQOabmtc0wVJPbOg2IwHaNH?pid=ImgDet&rs=1' />
				<span className="navbar-brand mb-0 h1">Rick and Morty </span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos
						</button>
	
					</div>
				</Link>
			</div>
		</nav>
	);
};
