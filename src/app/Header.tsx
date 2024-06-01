import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";


export default function Header() {
    return (
        <>
        <header className="header">
                <div className="container">
                    <div className="row p-0">
                        <div className="col-12 col-lg-5">
                            <div className="logo">
                                <Link href={"#"}>
                              <h6>Logo Here</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 d-flex align-items-center">
                            <div className="menu">
                                <ul>
                                    <li>
                                        <Link href={"/"}>home</Link>
                                    </li>
                                    <li>
                                        <Link href={"About"}>about</Link>
                                    </li>
                                    <li>
                                        <Link href={"OurProducts"}>products</Link>
                                    </li>
                                    <li>
                                        <Link href={"Contact"}>contact</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>
                                        <CiSearch />

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        <FaUserAlt />

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            cart
                                            <span>0</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}