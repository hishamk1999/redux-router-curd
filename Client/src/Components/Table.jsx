import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "State/features/postSlice";

function Table() {
	const { posts } = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	console.log(posts);

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
				<tr>
					<td>#1</td>
					<td>this is title 1</td>
					<td>
						<button className="btn btn-success">Edit</button>
						<button className="btn btn-danger">Delete</button>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Table;
