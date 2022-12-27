import React from "react";

const Header = () => {
	return (
		<div className="header">
			<h1>CRUD APP</h1>
			<div className="ctn-nav">
				<div className="container">
					<ul className="nav">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">Add Post</a>
						</li>
						<li className="login">login</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
