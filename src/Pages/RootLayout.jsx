import React from "react";
import { Outlet } from "react-router-dom";
//components
import { Header } from "Components";

function RootLayout() {
	return (
		<div className="rootLayout">
			<Header />
			<div className="container pages">
				<Outlet />
			</div>
		</div>
	);
}

export default RootLayout;
