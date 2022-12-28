import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "State/features/postSlice";

function Table() {
	const { records, loading, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

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
		<table className="w-100" border={1}>
			<thead>
				<tr>
					<th>#</th>
					<th style={{ width: "70%" }}>Title</th>
					<th style={{ width: "10%" }}>Actions</th>
				</tr>
			</thead>
			<tbody>
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
			</tbody>
		</table>
	);
}

export default Table;
