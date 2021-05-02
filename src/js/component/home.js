import React from "react";
import ReactDOM from "react-dom";
import { Button, Menu, SubMenu, Layout, Carousel } from "element-react";
import { Footer } from "./footer";
import { Placeholder } from "./placeholder";
import { Frames } from "./frames";
import { Repos } from "./repos";

//create your first component
export function Home() {
	return (
		<div>
			<div className="header header-fixed unselectable header-animated">
				<div className="header-brand">
					<div className="nav-item no-hover">
						<h6 className="title">My Portfolio</h6>
					</div>
					<div className="nav-item nav-btn" id="header-btn">
						{" "}
						<span></span> <span></span> <span></span>{" "}
					</div>
				</div>
				<div className="header-nav" id="header-menu">
					<div className="nav-left">
						<div className="nav-item text-center">
							{" "}
							<a href="#">
								{" "}
								<span className="icon">
									<i className="fab fa-wrapper fa-github"></i>
								</span>
							</a>{" "}
						</div>
					</div>
					<div className="nav-right">
						<div className="nav-item toggle-hover" id="dropdown">
							<a className="nav-dropdown-link">Portfolio</a>
						</div>
						<div
							className="nav-item has-sub toggle-hover"
							id="dropdown">
							<a className="nav-dropdown-link">Menu</a>
							<ul
								className="dropdown-menu dropdown-animated"
								role="menu">
								<li role="menu-item">
									<a href="#">First Item</a>
								</li>
								<li role="menu-item">
									<a href="#">Second Item</a>
								</li>
								<li role="menu-item">
									<a href="#">Third Item</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<section className="section">
				<div className="hero fullscreen">
					<div className="hero-body">
						<div className="content">
							<div className="text-center">
								{/* <Frames /> */}
								<h1>👋 Hello world!</h1>
								<h6 className="font-alt font-light">
									A webpage powered by <b>Cirrus.</b>
								</h6>
							</div>
							{/* <Cardholder /> */}
							{/* <div className="u-inline-flex bg-orange-100">
								<div className="px-2 py-1 m-1 u-round">
									<Repos />
								</div>
								<div className="px-2 py-1 m-1 u-round">
									<Repos />
								</div>
								<div className="px-2 py-1 m-1 u-round">
									<Repos />
								</div>
							</div> */}
							<Placeholder />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
