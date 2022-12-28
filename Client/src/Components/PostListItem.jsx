import React from "react";

function PostListItem({ records, deleteRecordHandler }) {
	const deleteHandler = (record) => {
		if (window.confirm(`Are you sure you want to delete ${record.title}?`)) {
			deleteRecordHandler(record.id);
		}
	};
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
							deleteHandler(record);
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
