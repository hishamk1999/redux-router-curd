import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../State/features/postSlice";
import { Loading, Table } from "../Components";

function Index() {
	const { records, loading, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	const deleteRecordHandler = useCallback(
		(id) => {
			dispatch(deletePost(id));
		},
		[dispatch]
	);

	return (
		<Loading loading={loading} error={error}>
			<Table records={records} deleteRecordHandler={deleteRecordHandler} />
		</Loading>
	);
}

export default Index;
