import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "State/features/postSlice";
import PostListItem from "./PostListItem";

function Table() {
	const { records, loading, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

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
				<PostListItem records={records} loading={loading} error={error} />
			</tbody>
		</table>
	);
}

export default Table;
