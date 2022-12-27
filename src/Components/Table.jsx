import React from "react";

function Table() {
	return (
		<div className="container">
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
		</div>
	);
}

export default Table;
