import { memo } from "react";
import PostListItem from "./PostListItem";

function Table({ records, deleteRecordHandler }) {
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
				<PostListItem
					records={records}
					deleteRecordHandler={deleteRecordHandler}
				/>
			</tbody>
		</table>
	);
}

export default memo(Table);
