import React from 'react';
import '../../scss/styles.scss';
import { Box } from '@chakra-ui/layout';
import SocialLinks from '../SocialLinks';
import Roadmap from '../Roadmap';

export default function Main() {
    return (
        <div>
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        H.N.I.C. Finance
                    </a>
                    <button
                        className="navbar-toggler navbar-toggler-right"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" style={{ marginTop: "7px" }} href="#about">
                                    ABOUT
                                </a>
                            </li>
                            <SocialLinks />
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Homepage*/}
            <header className="homepage" id="page-top">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase font-weight-bold">
                                H.N.I.C. Finance 
                            </h1>
                            <h2 className="text-uppercase font-weight-bold">
                                Yield Generating Limit Orders
                            </h2>
                            <hr className="divider my-4" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-black-75 font-weight-light mb-5">
                                Maximise returns on your asset automatically!
                            </p>
                            <a
                                className="btn btn-primary btn-xl js-scroll-trigger"
                                href="https://polygon.symphony.finance"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Launch APP
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* About*/}
            <section className="page-section bg-primary" id="about">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">We've got what you need!</h2>
                            <hr className="divider light my-4" />
                            <p className="text-white-70 mb-4">
                            H.N.I.C. finance allows users to create limit orders by depositing the sell asset. The order is filled automatically by an "Executor" who takes a fee to execute the orders only if the order's price constraints are satisfied. The sell asset is deposited to a yield generating protocol like Aave, Yearn, Mstable, etc.<br /><br />
                                This feature allows limit orders to earn yield for the time they are on the order book. The initial deposit + yield earned are traded for the buy asset by the executor only if the price constraints are satisfied. The order creator receives the buy assets automatically when the order is filled. The order creator can also set a stop loss to minimise losses while still earning yield.
                            </p>
                            <a
                                className="btn btn-light btn-xl js-scroll-trigger"
                                href="https://symphonyfi.gitbook.io/docs/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact*/}
            <section className="page-section" id="contact">
                <Roadmap />
            </section>

            {/* Footer*/}
            <footer className="bg-light py-5">
                <div className="container">
                    <Box maxW="containerLg" color="white" d="flex" justifyContent="space-between">
                        <div className="small text-muted">
                            Copyright © 2022 - H.N.I.C. Finance
                        </div>
                        <SocialLinks />
                    </Box>
                </div>
            </footer>
        </div >
    );
}
