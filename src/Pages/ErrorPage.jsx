import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();
	const navigate = useNavigate();
	console.error(error);
	return (
		<div className="errorPage container">
			<div id="error-page" className=" mt-5 text-center">
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => navigate("/",{replace: true})}
				>
					Back to Home
				</button>
			</div>
		</div>
	);
}

export default ErrorPage;
