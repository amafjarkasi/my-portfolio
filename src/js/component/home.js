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
						<h6 className="title">Amaf Jarkasi &gt; Projects</h6>
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
									<a
										href="https://github.com/amafjarkasi/"
										target="_new">
										<i className="fab fa-wrapper fa-github"></i>
									</a>
								</span>
							</a>{" "}
						</div>
					</div>
					<div className="nav-right">
						<div className="nav-item toggle-hover" id="dropdown">
							<a
								className="nav-dropdown-link"
								href="https://github.com/amafjarkasi/"
								target="_new">
								Github
							</a>
						</div>
						<div className="nav-item toggle-hover" id="dropdown">
							<a className="nav-dropdown-link">Contact</a>
						</div>
					</div>
				</div>
			</div>
			<section className="section">
				<div className="hero fullscreen">
					<div className="hero-body">
						<div className="content">
							<div className="text-center u-center">
								<h1>👋 Welcome to my portfolio page!</h1>
								<h6 className="pt-2 font-alt font-light">
									Latest projects listed <b>below.</b>
								</h6>
							</div>
							{/* <Cardholder /> */}
							<div className="u-inline-flex py-3">
								<div className="px-2 py-1 m-1 u-round">
									<Repos
										title="Investico Financial"
										description="Investing research application helping users"
										link=""
										languages="React/JS/Python"
									/>
								</div>
								<div className="px-2 py-1 m-1 u-round">
									<Repos
										title="Investico Financial"
										description="Investing research application helping users"
										link=""
										languages="React/JS/Python"
									/>
								</div>
								<div className="px-2 py-1 m-1 u-round">
									<Repos
										title="Investico Financial"
										description="Investing research application helping users"
										link=""
										languages="React/JS/Python"
									/>
								</div>
							</div>
							<br />
							<Placeholder />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
