import Link from "next/link";
import Footer from "../Component/Footer";

export default function Contact() {
    return (
        <>
            <div className="inner-banner">
                <div className="inner-banner_img">
                    <img src="images/inner-banner.png" alt="" />
                </div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-4 text-center">
                            <div className="inner-banner_content">
                                <h1>contact <span>us</span></h1>
                                <ul>
                                    <li><Link href="index.html">home</Link></li>
                                    /
                                    <li><Link href="contact.html" className="active">contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_map">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52918450.40025156!2d-161.85240697328845!3d35.949761324666035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1712532471377!5m2!1sen!2s"
                                width="100%"
                                height="600px"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-us__main">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6 text-center">
                            <h1>GET <span> IN TOUCH</span> </h1>
                        </div>
                        <div className="col-12 col-lg-10 mt-3">
                            <div className="row">
                                <div className="col-12 col-lg-6 py-3">
                                    <input type="text" placeholder="First Name" />
                                </div>
                                <div className="col-12 col-lg-6 py-3">
                                    <input type="text" placeholder="Last Name" />
                                </div>
                                <div className="col-12 col-lg-12 py-3">
                                    <input type="text" placeholder="Email" />
                                </div>
                                <div className="col-12 col-lg-12 py-3 textarea">
                                    <textarea rows={6} placeholder="Comment"></textarea>
                                </div>
                                <div className="col-12 col-lg-12 py-3 mt-3 text-center">
                                    <Link href="#" className="theme-btn_red">SEND </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}