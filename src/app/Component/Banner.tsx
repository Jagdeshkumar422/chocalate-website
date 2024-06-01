import Link from "next/link";

export default function Banner(){
    return<>
      <div className="banner">
                <div className="chocolate-01 up-down-animation">
                    <img src="images/chocolate-img01.png" alt=""/>
                </div>
                <div className="chocolate-02 up-down-animation">
                    <img src="images/chocolate-img01.png" alt=""/>
                </div>
                <div className="banner-loader loader-animation">
                    <img src="images/banner-loader.png" alt=""/>
                </div>
                <div className="banner-img">
                    <img src="images/banner.png" alt=""/>
                </div>
                <div className="container">
                    <div className="row home-slider">
                        <div className="col-12 col-lg-6">
                            <div className="banner-content">
                                <h4>show your</h4>
                                <h1>
                                    <span>love</span>
                                    with our
                                </h1>
                                <h2>
                                    Personalized
                                    <br/>
                                    <span>gifts</span>
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                                <div className="theme-group">
                                    <Link href="#" className="theme-btn">shop now </Link>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
    </>
}