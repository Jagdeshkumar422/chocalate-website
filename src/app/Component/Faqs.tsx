import { FaCheck } from "react-icons/fa";

export default function Faqs() {
    return (
        <>
            <div className="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4 d-flex p-0 align-items-center">
                            <div className="faq-content">
                                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                                <h4>$25.00</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam commodi odit perspiciatis nesciunt assumenda dolorem consectetur minus cum,</p>
                                <div className="theme-group">
                                    <a href="#" className="theme-btn-black">
                                        <FaCheck />
                                        add to cart
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 p-0">
                            <div className="faq_img">
                                <img src="images/img02.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 d-flex p-0 align-items-center">
                            <div className="faq-accordian">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                the showing and hiding via CSS transitions. You can modify any of this with custom CSS or though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                 though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingfour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="headingfour">
                                                Accordion Item #4
                                            </button>
                                        </h2>
                                        <div id="headingfour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolores pl.
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}