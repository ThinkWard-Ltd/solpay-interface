import React, { useState } from 'react';
import '../../scss/styles.scss';
import { Box } from '@chakra-ui/layout';
import SocialLinks from '../SocialLinks';
import { ExternalLink } from '../ExternalLink';

export default function Homepage() {
    const [openToggler, setOpenToggler] = useState(false);

    const onToggle = () => {
        setOpenToggler(!openToggler);
    };

    return (
        <div>
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light py-3 fixed-top" id="mainNav">
                <div className="container">
                    <div className="js-scroll-trigger logo"></div>

                    <button
                        className={
                            !openToggler ?
                                "navbar-toggler navbar-toggler-right collapsed" :
                                "navbar-toggler navbar-toggler-right"
                        }
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded={!openToggler ? "false" : "true"}
                        aria-label="Toggle navigation"
                        onClick={onToggle}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div
                        id="navbarResponsive"
                        className={!openToggler ?
                            "navbar-collapse collapse" :
                            "navbar-collapse collapse show"
                        }
                    >
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <ExternalLink
                                    className="nav-link js-scroll-trigger"
                                    href="https://metasol.medium.com/introducing-metasol-meta-transaction-on-solana-3a5ae5e7e7fd"
                                    style={{ marginTop: "6px" }}
                                >
                                    ABOUT
                                </ExternalLink>
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
                            <h1 className="font-weight-bold">
                                COMING SOON
                            </h1>
                            <hr className="divider my-4" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                        </div>
                    </div>
                </div>
            </header>

            {/* Footer*/}
            <footer className="py-5" style={{ background: "#ffffff" }}>
                <div className="container">
                    <Box maxW="containerLg" color="white" d="flex" justifyContent="space-between">
                        <div className="copyright small text-muted">
                            Copyright © 2021 - MetaSol
                        </div>
                        <SocialLinks />
                    </Box>
                </div>
            </footer>
        </div >
    );
}
