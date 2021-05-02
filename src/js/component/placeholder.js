import React from "react";
import ReactDOM from "react-dom";
import { Button, Menu, SubMenu, Layout, Carousel } from "element-react";

//create your first component
export function Placeholder() {
	return (
		<div className="placeholder">
			<div className="placeholder-icon">
				<span className="icon">
					<i className="fa fa-wrapper fa-coffee x-large"></i>
				</span>
			</div>
			<h6 className="placeholder-title">
				The sever is currently taking a nap.
			</h6>
			<div className="placeholder-subtitle">
				Come back in a few hours or press the refresh button.
			</div>
			<div className="placeholder-commands u-center">
				<div className="m-1">
					<button className="btn-primary">Refresh</button>
				</div>
				<div className="m-1">
					<button>Home</button>
				</div>
			</div>
		</div>
	);
}
