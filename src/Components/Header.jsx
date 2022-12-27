import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<h1>CRUD APP</h1>
			<div className="ctn-nav">
				<div className="container">
					<ul className="nav">
						<li>
							<NavLink to="/" end>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="post/add">Add Post</NavLink>
						</li>
						<li className="login">login</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
