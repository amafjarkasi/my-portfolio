import React from "react";
import ReactDOM from "react-dom";
import { Button, Menu, SubMenu, Layout, Carousel } from "element-react";

//create your first component
export function Footer() {
	return (
		<div>
			<footer className="footer">
				<h6 className="footer__title white uppercase">PORTFOLIO</h6>
				<div className="content">
					<div className="divider"></div>

					<div className="row">
						<div className="col-4">
							<ul className="no-bullets">
								<a href="/">
									<li className="footer__list-item">Home</li>
								</a>
								<ul></ul>
							</ul>
						</div>
						<div className="col-4">
							<ul className="no-bullets">
								<a href="!#">
									<li className="footer__list-item">
										Contact Info
									</li>
								</a>
								<ul></ul>
							</ul>
						</div>
						<div className="col-4">
							<ul className="no-bullets">
								<a href="!#">
									<li className="footer__list-item">FAQ</li>
								</a>
								<ul></ul>
							</ul>
						</div>
					</div>
				</div>
				<p className="subtitle">Amaf Jarkasi © 2021.</p>
			</footer>
		</div>
	);
}
