
import { Link } from "react-router-dom";
import email from "../../../assets/email.png";
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import linkedin from "../../../assets/linkedin-logo.png";
import location from "../../../assets/location.png";
import telephone from "../../../assets/telephone.png";
import logo from "../../../assets/title.png";
import twitter from "../../../assets/twitter.png";





const Footer = () => {
    return (
        <div className="bg-[#01121e] bg-gradient-to-r from-[#000F1A] to-[#003259]">
            <div className=" container mx-auto">
                <footer className="footer text-white p-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 items-center ">
                    <aside>
                        <div className="flex justify-center">
                            <img
                                className=" w-[180px] lg:w-[235px] lg:h-[119px] my-[20px]"
                                src={logo}
                                alt="360d soul logo"
                            />
                        </div>
                        <div className=" text-justify text-[#cdcdcd] font-medium font-['Inter']">
                            BMCCI has adopted the highest standards of IT service
                            and consultancy quality and operational excellence, enabling its
                            clients across a wide range of industries to transform into a truly
                            digital, data-driven enterprise.
                        </div>
                        <div className="flex gap-3 mt-[30px]">
                            <Link href="/">
                                <img src={facebook} alt="360d facebook logo" />
                            </Link>
                            <Link href="/">
                                <img src={instagram} alt="360d instagram logo" />
                            </Link>
                            <Link href="/">
                                <img src={linkedin} alt="360d linkedin logo" />
                            </Link>
                            <Link href="/">
                                <img src={twitter} alt="360d twitter logo" />
                            </Link>
                        </div>
                    </aside>
                    <nav>
                        <div className="text-white text-4xl font-bold font-['Inter']">
                            Solutions
                            <div className="flex mt-[18px]">
                                <span className="border-[3px] border-[#00B4D8] w-[25px]"></span>
                                <span className="border-[3px] border-[#0077B6] w-[30px]"></span>
                                <span className="border-[3px] border-[#03045E] w-[35px]"></span>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-3 mt-[25px]">
                            <Link className="link link-hover text-[#cdcdcd] text-[18px]">
                                IT Infrastructure
                            </Link>
                            <Link className="link link-hover text-[#cdcdcd] text-[18px]">
                                Integrated Cyber Security
                            </Link>
                            <Link className="link link-hover text-[#cdcdcd] text-[18px]">
                                Modern Workplace
                            </Link>
                            <Link className="link link-hover text-[#cdcdcd] text-[18px]">
                                Web Application
                            </Link>
                            <Link className="link link-hover text-[#cdcdcd] text-[18px]">
                                Business Automation
                            </Link>
                            <Link className="link link-hover text-[#cdcdcd] text-[18px]">
                                Internet of Things (IoT)
                            </Link>
                            <Link className="link link-hover text-[#cdcdcd] text-[18px]">
                                Blockchain
                            </Link>
                        </div>
                    </nav>
                    <nav>
                        <div className="text-white text-4xl font-bold font-['Inter']">
                            Services
                            <div className="flex mt-[18px]">
                                <span className="border-[3px] border-[#00B4D8] w-[25px]"></span>
                                <span className="border-[3px] border-[#0077B6] w-[30px]"></span>
                                <span className="border-[3px] border-[#03045E] w-[35px]"></span>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-3 mt-[25px]">
                            <Link className="link link-hover text-[#cdcdcd] text-[18px]">
                                IT Consultancy
                            </Link>
                            <Link className="link link-hover text-[#cdcdcd] text-[18px]">
                                Managed IT
                            </Link>
                            <Link className="link link-hover text-[#cdcdcd] text-[18px]">
                                Digital Marketing
                            </Link>
                            <Link className="link link-hover text-[#cdcdcd] text-[18px]">
                                Domain & Hosting
                            </Link>
                            <Link className="link link-hover text-[#cdcdcd] text-[18px]">
                                Business Automation
                            </Link>
                            <Link className="link link-hover text-[#cdcdcd] text-[18px]">
                                Technology Training
                            </Link>
                            <Link className="link link-hover text-[#cdcdcd] text-[18px]">
                                Offshore Development
                            </Link>
                        </div>
                    </nav>
                    <nav>
                        <div className="text-white text-4xl font-bold font-['Inter']">
                            Get In Touch
                            <div className="flex mt-[18px]">
                                <span className="border-[3px] border-[#00B4D8] w-[25px]"></span>
                                <span className="border-[3px] border-[#0077B6] w-[30px]"></span>
                                <span className="border-[3px] border-[#03045E] w-[35px]"></span>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-3 mt-[25px]">
                            <p className=" text-[#cdcdcd] text-[18px]">
                                We’re just a click away, ready to discuss your business needs and
                                provide the perfect IT solutions.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <img src={location} alt="location" />
                                <p>House-774, Road-11, Avenue-02, Mirpur DOHS, Dhaka-1216</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src={email} alt="location" />
                                <p>info@360dsoul.com</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src={telephone} alt="location" />
                                <p>01000000000</p>
                            </div>
                        </div>
                    </nav>
                </footer>
                <hr />
                <div className="mt-5 text-center text-[#CDCDCD] pb-10 font-medium font-['Inter']">
                    <p>© 2024 Design & Developed By 360D Soul Limited</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;