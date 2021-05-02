import React from "react";
import ReactDOM from "react-dom";
import { Button, Menu, SubMenu, Layout, Carousel } from "element-react";

//create your first component
export function Frames() {
	return (
		<>
			<div className="row no-space">
				<div className="col-6">
					<div className="uppercase">
						<div className="frame">
							<div className="frame__header u-text-center">
								<div>
									<figure className="avatar">
										<img src="https://orig04.deviantart.net/aded/f/2013/066/c/2/profile_picture_by_naivety_stock-d5x8lbn.jpg" />
									</figure>
								</div>
								<div>
									<div className="frame__title">John Doe</div>
									<div className="frame__subtitle">
										Freelance Photographer
									</div>
								</div>
								<div className="row">
									<a className="col" href="#">
										<i
											className="fa fa-wrapper fa-facebook link-btn"
											aria-hidden="true"></i>
									</a>
									<a className="col" href="#">
										<i
											className="fa fa-wrapper fa-twitter link-btn"
											aria-hidden="true"></i>
									</a>
									<a className="col" href="#">
										<i
											className="fa fa-wrapper fa-instagram link-btn"
											aria-hidden="true"></i>
									</a>
									<a className="col" href="#">
										<i
											className="fa fa-wrapper fa-medium link-btn"
											aria-hidden="true"></i>
									</a>
								</div>
							</div>
							<div className="content-no-padding">
								<div className="divider m-0"></div>
							</div>
							<div className="frame__body">
								<div className="content u-text-center">
									<h5>Lorem! Ipsum!</h5>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris
										nisi ut aliquip ex ea commodo consequat.
									</p>
								</div>
							</div>
							<div className="content-no-padding">
								<div className="divider m-0"></div>
							</div>
							<div className="frame__footer">
								<div className="frame__subtitle u-text-center">
									<i>
										Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
