import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Card, Button, Menu, SubMenu, Layout, Carousel } from "element-react";

//create your first component
export const Repos = props => {
	return (
		<>
			<div className="tile u-shadow p-1">
				<div className="tile__icon"></div>
				<div className="tile__container">
					<p className="tile__title m-0">
						<b>{props.title}</b>
					</p>
					<p className="tile__subtitle m-0">{props.description}</p>
					<span className="info">
						<b>{props.languages}</b>
					</span>
					<br />
					<div className="tile__buttons m-0">
						<button className="btn-primary btn-small uppercase">
							View
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

Repos.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	link: PropTypes.string,
	languages: PropTypes.string
};
