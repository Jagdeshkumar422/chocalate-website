import Link from "next/link";
import Footer from "../Component/Footer";

export default function OurProducts() {
    return (
        <>
            <div className="inner-banner">
                <div className="inner-banner_img">
                    <img src="images/inner-banner.png" alt="" />
                </div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 text-center">
                            <div className="inner-banner_content">
                                <h1>our <span>products</span></h1>
                                <ul>
                                    <li><Link href="index.html">home</Link></li>
                                    /
                                    <li><Link href="loginSignup.html" className="active">our products</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="products-filter-card">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3 p-3">
                            <div className="caterogy-card">
                                <h4>CATEGORIES</h4>
                                <ul>
                                    <li>
                                        <Link href="#">all</Link>
                                        <i className="fa fa-caret-up"></i>
                                    </li>
                                    <li>
                                        <Link href="#">Lorem ipsum</Link>
                                        <i className="fa fa-caret-up"></i>
                                    </li>
                                    <li>
                                        <Link href="#">Lorem ipsum</Link>
                                        <i className="fa fa-caret-up"></i>
                                    </li>
                                    <li>
                                        <Link href="#">Lorem ipsum</Link>
                                        <i className="fa fa-caret-up"></i>
                                    </li>
                                    <li>
                                        <Link href="#">more</Link>
                                        <i className="fa fa-caret-up"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="price-rating">
                                <h4>PRICE RANGE</h4>
                                <ul>
                                    <li><input type="checkbox"/></li>
                                    <li>$0</li>
                                    <li>$25</li>
                                </ul>
                                <ul>
                                    <li><input type="checkbox"/></li>
                                    <li>$0</li>
                                    <li>$25</li>
                                </ul>
                                <ul>
                                    <li><input type="checkbox"/></li>
                                    <li>$0</li>
                                    <li>$25</li>
                                </ul>
                                <ul>
                                    <li><input type="checkbox"/></li>
                                    <li>$0</li>
                                    <li>$25</li>
                                </ul>
                                <ul>
                                    <li><input type="checkbox"/></li>
                                    <li>$0</li>
                                    <li>$25</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-9 p-3">
                            <div className="filter-card">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="tt-select">
                                            <select>
                                                <option value="0">Default Sorting</option>
                                                <option value="1">Option One</option>
                                                <option value="2">Option Two</option>
                                                <option value="3">Option Three</option>
                                                <option value="4">Option Four</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-3">
                                        <div className="tt-select">
                                            <select>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-3 head-nav">
                                        <Link href="#">Showing 1-12 Of 48 Results</Link>
                                    </div>

                                    <div className="col-12 col-lg-4 mt-5 p-0">
                                        <div className="product-card gift-card">
                                            <img src="images/product-img01.png" className="img-fluid" alt="" />
                                            <div className="our-product_content">
                                                <div className="justify-content-between align-items-center d-flex">
                                                    <h4>product name</h4>
                                                    <ul>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="align-items-center justify-content-between d-flex">
                                                    <strong>$45.00</strong>
                                                    <div className="theme-group">
                                                        <Link href="#" className="theme-btn">add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 mt-5 p-0">
                                        <div className="product-card gift-card">
                                            <img src="images/product-img03.png" className="img-fluid" alt="" />
                                            <div className="our-product_content">
                                                <div className="justify-content-between align-items-center d-flex">
                                                    <h4>product name</h4>
                                                    <ul>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="align-items-center justify-content-between d-flex">
                                                    <strong>$45.00</strong>
                                                    <div className="theme-group">
                                                        <Link href="#" className="theme-btn">add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 mt-5 p-0">
                                        <div className="product-card gift-card">
                                            <img src="images/product-img01.png" className="img-fluid" alt="" />
                                            <div className="our-product_content">
                                                <div className="justify-content-between align-items-center d-flex">
                                                    <h4>product name</h4>
                                                    <ul>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="align-items-center justify-content-between d-flex">
                                                    <strong>$45.00</strong>
                                                    <div className="theme-group">
                                                        <Link href="#" className="theme-btn">add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 mt-5 p-0">
                                        <div className="product-card gift-card">
                                            <img src="images/product-img02.png" className="img-fluid" alt="" />
                                            <div className="our-product_content">
                                                <div className="justify-content-between align-items-center d-flex">
                                                    <h4>product name</h4>
                                                    <ul>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="align-items-center justify-content-between d-flex">
                                                    <strong>$45.00</strong>
                                                    <div className="theme-group">
                                                        <Link href="#" className="theme-btn">add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 mt-5 p-0">
                                        <div className="product-card gift-card">
                                            <img src="images/product-img03.png" className="img-fluid" alt="" />
                                            <div className="our-product_content">
                                                <div className="justify-content-between align-items-center d-flex">
                                                    <h4>product name</h4>
                                                    <ul>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="align-items-center justify-content-between d-flex">
                                                    <strong>$45.00</strong>
                                                    <div className="theme-group">
                                                        <Link href="#" className="theme-btn">add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 mt-5 p-0">
                                        <div className="product-card gift-card">
                                            <img src="images/product-img02.png" className="img-fluid" alt="" />
                                            <div className="our-product_content">
                                                <div className="justify-content-between align-items-center d-flex">
                                                    <h4>product name</h4>
                                                    <ul>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="align-items-center justify-content-between d-flex">
                                                    <strong>$45.00</strong>
                                                    <div className="theme-group">
                                                        <Link href="#" className="theme-btn">add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 mt-5 p-0">
                                        <div className="product-card gift-card">
                                            <img src="images/product-img01.png" className="img-fluid" alt="" />
                                            <div className="our-product_content">
                                                <div className="justify-content-between align-items-center d-flex">
                                                    <h4>product name</h4>
                                                    <ul>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="align-items-center justify-content-between d-flex">
                                                    <strong>$45.00</strong>
                                                    <div className="theme-group">
                                                        <Link href="#" className="theme-btn">add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 mt-5 p-0">
                                        <div className="product-card gift-card">
                                            <img src="images/product-img02.png" className="img-fluid" alt="" />
                                            <div className="our-product_content">
                                                <div className="justify-content-between align-items-center d-flex">
                                                    <h4>product name</h4>
                                                    <ul>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="align-items-center justify-content-between d-flex">
                                                    <strong>$45.00</strong>
                                                    <div className="theme-group">
                                                        <Link href="#" className="theme-btn">add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 mt-5 p-0">
                                        <div className="product-card gift-card">
                                            <img src="images/product-img03.png" className="img-fluid" alt="" />
                                            <div className="our-product_content">
                                                <div className="justify-content-between align-items-center d-flex">
                                                    <h4>product name</h4>
                                                    <ul>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star checked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                        <li>
                                                            <span className="fa fa-star unchecked"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="align-items-center justify-content-between d-flex">
                                                    <strong>$45.00</strong>
                                                    <div className="theme-group">
                                                        <Link href="#" className="theme-btn">add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}