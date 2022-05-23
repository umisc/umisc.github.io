/* eslint-disable linebreak-style */
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Diamond
import atlassian_logo from '../images/atlassian-logo.png'
import afterpay_logo from '../images/afterpay-logo.png'
import commbank_logo from '../images/CommBank-Logo.png'
import tesserent_logo from '../images/Tesserent-logo.png'
import fortian_logo from '../images/fortian-logo.png'

// Silver
import cybersecpeople_logo from '../images/cybersecpeople-logo.png'
import promithicio_logo from '../images/promithicio-logo.png'

// Gold
import optiver_logo from '../images/optiver-logo.jpg'
import canva_logo from '../images/canva-logo.png'
import sekuro_logo from '../images/sekuro-logo.jpg'

// Old Sponsors
// import dronesec_logo from '../images/dronesec-logo-transparent.png'
// import kaspersky_logo from '../images/Kaspersky logo white (no background).png'
// import accenture_logo from '../images/accenture-logo.png'
// import puresecurity_logo from '../images/Pure Security Transparent.png'
// import pentesterlab_logo from '../images/pentesterlab-logo-transparent.png'

import '../styles/sponsers.sass'

const SponsersPage = () => {
    return (
        <Layout>
            <SEO title="Sponsors" />
            <div className="gallery-container">
                <h1 className="diamond-heading">Diamond Sponsors</h1>
                <div>
                    <div className="sponsors-container">
                        <div className="sponsors-logos">
                            <a href="https://www.atlassian.com/">
                                <img
                                    src={atlassian_logo}
                                    className="atlassian-logo"
                                />
                            </a>
                        </div>
                        <div className="sponsors-logos">
                            <a href="https://www.afterpay.com/">
                                <img
                                    src={afterpay_logo}
                                    className="afterpay-logo"
                                />
                            </a>
                        </div>
                        <div className="sponsors-logos">
                            <a href="https://www.commbank.com.au/">
                                <img
                                    src={commbank_logo}
                                    className="commbank-logo"
                                />
                            </a>
                        </div>
                        <div className="sponsors-logos">
                            <a href="https://tesserent.com/">
                                <img
                                    src={tesserent_logo}
                                    className="tesserent-logo"
                                />
                            </a>
                        </div>
                        <div className="sponsors-logos">
                            <a href="https://www.fortian.com.au">
                                <img
                                    src={fortian_logo}
                                    className="fortian-logo"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <h1 className="gold-heading">Gold Sponsors</h1>
                <div>
                    <div className="sponsors-container">
                        <div className="sponsors-logos">
                            <a href="https://www.optiver.com/">
                                <img
                                    src={optiver_logo}
                                    className="optiver-logo"
                                />
                            </a>
                        </div>
                        
                        <div className="sponsors-logos">
                            <a href="https://www.canva.com/">
                                <img
                                    src={canva_logo}
                                    className="puresecurity-logo"
                                />
                            </a>
                        </div>

                        <div className="sponsors-logos">
                            <a href="https://sekuro.io/">
                                <img
                                    src={sekuro_logo}
                                    className="puresecurity-logo"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <h1 className="silver-heading">Silver Sponsors</h1>
                <div className="sponsors-container">
                    <div className="sponsors-logos">
                        <a href="https://www.cybersecpeople.com/">
                            <img
                                src={cybersecpeople_logo}
                                className="cybersecpeople-logo"
                            />
                        </a>
                    </div>
                    <div className="sponsors-logos">
                        <a href="https://promithic.io/">
                            <img
                                src={promithicio_logo}
                                className="cybersecpeople-logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default SponsersPage
