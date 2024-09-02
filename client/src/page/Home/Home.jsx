import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import logoImg from "../../../src/assets/logo.png";
import Table from "../../components/Table/Table";

const Home = () => {

    const [companyInfo, setCompanyInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/company')
            .then(res => res.json())
            .then(data => setCompanyInfo(data));
    }, []);

    console.log(companyInfo)
    return (
        <div className="container mx-auto my-10 p-4 lg:p-0">
            <div className="flex justify-between gap-10">
                {/* cad-1 */}
                <div className="lg:flex shadow-2xl px-12 py-5 rounded-2xl border font-bold gap-14">
                    <div className="space-y-5">
                        <h2 className="text-2xl font-bold">
                            <a className="border-b-2 border-black ">Digital Directory</a>
                        </h2>
                        <div className="lg:flex gap-5">
                            <h4 className=" bg-yellow-300 px-5 py-2 rounded-xl relative ">Update Now
                                <span className="absolute bottom-4 bg-red-600 rounded-full text-white p-1 ml-1">45</span>
                            </h4>
                            <h4 className=" bg-red-400 px-5 py-2 rounded-xl relative ">Update Now
                                <span className="absolute bottom-4 bg-red-600 rounded-full text-white p-1 ml-1">45</span>
                            </h4>
                        </div>
                        <h4 className="text-lg">DirectoryNeed To update <a className="text-red-500 border-b-2 border-red-600 ">View All</a></h4>
                    </div>
                    <div className="lg:flex gap-5">
                        <div className="bg-gradient-to-t from-emerald-300 to-lime-200 rounded-3xl text-cemter p-5">
                            <h4 className="text-center">
                                <span className="opacity-75">Tottal </span> <br />
                                <span className="text-5xl font-bold">50</span> <br />
                                <span className="text-xl font-semibold opacity-75">Partnears</span>
                            </h4>
                        </div>
                        <div className="border-r-2"></div>
                        <div className="bg-gradient-to-t from-sky-400 to-sky-100 rounded-3xl text-cemter p-5">
                            <h4 className="text-center font-semibold">
                                <span className="opacity-75">Powered By</span>
                                <img className="w-24" src={logoImg} alt="360D" />
                                <span className="opacity-65 ">Honored</span>
                            </h4>
                        </div>
                    </div>
                </div>

                {/* card-2 */}
                <div className="lg:flex shadow-2xl px-12 py-5 rounded-2xl border font-bold gap-20">
                    {/* Filter by Alpaet */}
                    <div>
                        <h2 className="text-2xl font-bold">Filter By Alphabet</h2>
                        <div className="flex bg-cyan-400 rounded-full px-6 py-3 space-x-5 text-xl mt-5">
                            <span className="bg-white rounded-full px-4 py-2 text-center cursor-pointer">A</span>
                            <span className="bg-white rounded-full px-4 py-2 text-center cursor-pointer">B</span>
                            <span className="bg-white rounded-full px-4 py-2 text-center cursor-pointer">C</span>
                            <span className="bg-white rounded-full px-4 py-2 text-center cursor-pointer">D</span>
                            <span> <IoIosArrowForward className="text-2xl text-center items-center mt-3" /> </span>
                        </div>
                    </div>
                    {/* Filter by Company  */}
                    <div>
                        <h2 className="text-2xl font-bold">Filter By Company</h2>
                        <div className="dropdown dropdown-bottom mt-6">
                            <div tabIndex={0} role="button" className="btn m-1">Find Comapny
                                <IoIosArrowForward className="text-2xl text-center items-center ml-4" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div>
                <Table companyInfo={companyInfo}></Table>
            </div>
        </div>
    );
};

export default Home;