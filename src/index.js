import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages
import { Add, Details, Edit, RootLayout, ErrorPage } from "./Pages";
import { Table } from "Components";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Table /> },
			{ path: "post", element: <Table /> },
			{ path: "post/add", element: <Add /> },
			{ path: "post/:id", element: <Details /> },
			{ path: "post/:id/edit", element: <Edit /> },
		],
	},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<RouterProvider router={router} />
	// </React.StrictMode>
);
