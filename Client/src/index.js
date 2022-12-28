import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "State";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//pages
import { AddPost, Details, Edit, RootLayout, ErrorPage, Index } from "./Pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Index /> },
			{ path: "post", element: <Index /> },
			{ path: "post/add", element: <AddPost /> },
			{
				path: "post/:id",
				element: <Details />,
				loader: ({ params }) => {
					if (isNaN(params.id)) {
						throw new Response("Bad Request", {
							statusText: "Post ID not correct",
							status: 400,
						});
					}
					return null;
				},
			},
			{ path: "post/:id/edit", element: <Edit /> },
		],
	},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// release React.StrictMode again in production.
	// <React.StrictMode>
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
	// </React.StrictMode>
);
