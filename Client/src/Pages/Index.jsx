import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "State/features/postSlice";
import { Loading, Table } from "../Components";

function Index() {
	const { records, loading, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<Loading loading={loading} error={error}>
			<Table records={records} />
		</Loading>
	);
}

export default Index;
