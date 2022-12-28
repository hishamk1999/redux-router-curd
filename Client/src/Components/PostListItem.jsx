import React from "react";

function PostListItem({ records, loading, error }) {
	const postsUI = records.map((record, index) => {
		return (
			<tr key={record.id}>
				<td>#{++index}</td>
				<td>{record.title}</td>
				<td>
					<button className="btn btn-success">Edit</button>
					<button className="btn btn-danger">Delete</button>
				</td>
			</tr>
		);
	});
	return (
		<>
			{loading ? (
				<tr>
					<td>Loading please wait...</td>
				</tr>
			) : error ? (
				<tr>
					<td>{error}</td>
				</tr>
			) : (
				postsUI
			)}
		</>
	);
}

export default PostListItem;
