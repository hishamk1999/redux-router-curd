import React from "react";

function PostListItem({ records, deleteRecordHandler }) {
	const postsUI = records.map((record, index) => {
		return (
			<tr key={record.id}>
				<td>#{++index}</td>
				<td>{record.title}</td>
				<td>
					<button className="btn btn-success">Edit</button>
					<button
						className="btn btn-danger"
						onClick={() => {
							deleteRecordHandler(record.id);
						}}
					>
						Delete
					</button>
				</td>
			</tr>
		);
	});
	return <>{postsUI}</>;
}

export default PostListItem;
