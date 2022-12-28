import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { insertPost } from "State/features/postSlice";

function AddPost() {
	const [post, setPost] = useState({ title: "", description: "" });
	const dispatch = useDispatch();
	// Handel onChange
	const handelChange = (e) => {
		setPost((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};
	const submitHandler = (e) => {
		if (window.confirm("Are you sure you want to submit this post?")) {
			e.preventDefault();
			e.target.reset();
			e.target[0].focus();
			dispatch(insertPost(post));
			console.log("here");
		}
	};
	return (
		<form action="#" onSubmit={submitHandler}>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">
					Title
				</label>
				<input
					required
					name="title"
					type="text"
					className="form-control"
					id="exampleFormControlInput1"
					placeholder="Type your title here..."
					onChange={handelChange}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">
					Description
				</label>
				<textarea
					required
					name="description"
					className="form-control"
					id="exampleFormControlTextarea1"
					rows="3"
					placeholder="type your description here..."
					onChange={handelChange}
				></textarea>
			</div>
			<div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</div>
		</form>
	);
}

export default memo(AddPost);
