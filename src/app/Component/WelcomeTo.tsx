import Link from "next/link";

export default function WelcomeTo() {
    return (
    <>
    <div className="wellcome_to">
                <div className="wellcome_to-bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="wellcome-to_content">
                                <span>welcome to</span>
                                <h2>melly's munchies</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro enim, alias optio incidunt aut similique itaque, provident corporis totam amet quibusdam autem. Soluta similique perspiciatis explicabo alias cum dignissimos saepe.</p>
                                <div className="theme-group">
                                    <Link href="#" className="theme-btn">know more about</Link>
                                </div>
                                <div className="wellcome-to_img01">
                                    <img src="images/wellcome-to_img02.png" className="img-fluid" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <div className="wellcome-to_img02">
                                <img src="images/wellcome-to_img01.png" className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="surprise_mom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <img src="images/img01.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-12 col-lg-6 d-flex align-items-center">
                            <div className="surprise_mom_content">
                                <h3>Surprise Mom with</h3>
                                <h2>Unique gifts</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh</p>
                                <div className="theme-group">
                                    <Link href="#" className="theme-btn">Create custom cookies</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
)
}