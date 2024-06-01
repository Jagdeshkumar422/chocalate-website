import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="logo-area">
                                <Link href="#">
                                 <h6>LOGO HERE</h6>
                                </Link>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                <ul className="social-icons">
                                    <li>
                                        <Link href="#">
                                        <FaFacebook />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        <FaTwitter />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        <FaYoutube />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        <FaInstagram />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <h4>Information</h4>
                            <ul>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-2">
                            <h4>Quick links</h4>
                            <ul>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-2">
                            <h4>help</h4>
                            <ul>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-2">
                            <h4>products</h4>
                            <ul>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                                <li>
                                    <Link href="#">lorem ipsum</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-12 copyright">
                            <div className="row">
                                <div className="col-12 col-lg-6 d-flex align-items-center">
                                    <p>@copyright. 2023 All Right Reserved.</p>
                                </div>
                                <div className="col-12 col-lg-6 text-right">
                                    <img src="images/debit-card.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}