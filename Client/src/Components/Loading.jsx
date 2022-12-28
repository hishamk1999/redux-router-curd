import React from "react";

function Loading({ loading, error, children }) {
	return (
		<>
			{loading ? (
				<p className="text-center fs-3 text-danger">Loading please wait...</p>
			) : error ? (
				<p className="text-center fs-3 text-danger">{error}</p>
			) : (
				children
			)}
		</>
	);
}

export default Loading;
