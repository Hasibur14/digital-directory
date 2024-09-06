import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import logoImg from "../../../src/assets/logo.png";
import Table from "../../components/Table/Table";
import useCompany from "../../hooks/useCompany";
import './styles/style.css';

const Home = () => {

    const [companyData] = useCompany()

    const [companyInfo, setCompanyInfo] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownCompanyNameOpen, setIsDropdownCompanyNameOpen] = useState(false);
    const [selectedLetter, setSelectedLetter] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');
    const [companyNames, setCompanyNames] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            const url = selectedLetter
                ? `${import.meta.env.VITE_API_URL}/companys/${selectedLetter}`
                : `${import.meta.env.VITE_API_URL}/companys`;
            const res = await fetch(url);
            const data = await res.json();
            setCompanyInfo(data);
        };

        fetchCompanies();
    }, [selectedLetter]);

    useEffect(() => {
        const fetchCompanyNames = async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/companyNames/names`);
            const data = await res.json();
            setCompanyNames(data);
        };

        fetchCompanyNames();
    }, []);

    useEffect(() => {
        const fetchCompanies = async () => {
            const url = selectedCompany
                ? `${import.meta.env.VITE_API_URL}/companyName/filter?name=${encodeURIComponent(selectedCompany)}`
                : `${import.meta.env.VITE_API_URL}/company`;

            const res = await fetch(url);
            const data = await res.json();
            setCompanyInfo(data);
        };

        fetchCompanies();
    }, [selectedCompany]);

    const handleLetterClick = (letter) => {
        setSelectedLetter(letter);
        setIsDropdownOpen(false);
    };

    const handleCompanySelect = (company) => {
        setSelectedCompany(company);
        setSelectedLetter('');
        setIsDropdownCompanyNameOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsDropdownCompanyNameOpen(false);
    };

    const toggleDropdownCompanyName = () => {
        setIsDropdownCompanyNameOpen(!isDropdownCompanyNameOpen);
        setIsDropdownOpen(false);
    };

    return (
        <div className="container mx-auto my-10 p-4 lg:p-0">
            <div className="card-main lg:flex justify-between gap-5">
                {/* card-1 */}
                <div className="card-1 w-full lg:w-[50%] shadow-lg md:shadow-xl px-5 py-4 rounded-2xl border font-bold lg:gap-16 flex flex-col lg:flex-row">
                    <div className="space-y-4 lg:w-[50%]">
                        <h2 className="text-2xl font-bold">
                            <a className="border-b-2 border-black">Digital Directory</a>
                        </h2>
                        <div className="flex justify-between gap-5 text-center items-center">
                            <h4 className="w-[50%] bg-amber-100 text-amber-500 px-5 py-2 rounded-xl relative text-center ">
                                Update
                                <span className="absolute bottom-4 right-0 bg-red-600 rounded-full text-white p-1 ml-1">45</span>
                            </h4>
                            <h4 className="w-[50%] bg-red-100 text-red-500 px-5 py-2 rounded-xl relative text-center items-center justify-center">
                                Pending
                                <span className="absolute bottom-4 right-0 bg-red-600 rounded-full text-white p-1">25</span>
                            </h4>
                        </div>
                        <h4 className="directory-view text-lg py-3 md:py-0">
                            Directory Needs to update <a className="text-red-500 border-b-2 border-red-600">View All</a>
                        </h4>
                    </div>
                    <div className="flex justify-between lg:w-[50%]">
                        <div className="w-[47%] bg-gradient-to-t from-emerald-300 to-lime-200 rounded-3xl text-center p-5">
                            <h4 className="text-center items-center justify-center">
                                <span className="opacity-75">Total </span>
                                <br />
                                <span className="text-5xl font-semibold">{companyData?.length}</span>
                                <br />
                                <span className="text-xl font-semibold opacity-75">Industry</span>
                            </h4>
                        </div>
                        <div className="border-r-2"></div>
                        <div className="w-[47%] bg-gradient-to-t from-sky-400 to-sky-100 rounded-3xl  p-5 text-center items-center justify-center">
                            <h4 className="font-semibold text-center ">
                                <span className="opacity-75">Powered By</span>
                                <img className="w-24 ml-2" src={logoImg} alt="360D" />
                                <span className="opacity-65">Honored</span>
                            </h4>
                        </div>
                    </div>
                </div>

                {/* card-2 */}
                <div className="w-full lg:w-[50%] mt-10 lg:mt-0 space-y-8 md:space-y-0 flex flex-col lg:flex-row gap-5">
                    {/* Filter by Alphabet */}
                    <div className="alphabet-card lg:w-[50%] shadow-lg md:shadow-2xl px-5 py-6 rounded-2xl border-2 relative">
                        <h2 className="alphabet-card-text text-xl font-semibold">Filter By Alphabet</h2>
                        <div>
                            <div className="alphabet-text flex bg-cyan-300 rounded-full text-center mt-8 ">
                                <div className="alphabet flex bg-cyan-300 rounded-3xl py-[6px] justify-between px-4 text-center lg:gap-[18px]">
                                    {['A', 'B', 'C', 'D', 'E'].map(letter => (
                                        <span
                                            key={letter}
                                            className="bg-white w-10 rounded-full px-1 py-[6px] text-center cursor-pointer"
                                            onClick={() => handleLetterClick(letter)}
                                        >
                                            {letter}
                                        </span>
                                    ))}
                                </div>
                                <span>
                                    <IoIosArrowForward
                                        onClick={toggleDropdown}
                                        className={`text-2xl text-center items-center mt-3 mr-2 transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`}
                                    />
                                </span>
                            </div>


                            {/* Dropdown menu */}
                            {isDropdownOpen && (
                                <ul className="absolute top-full left-0 mt-2 bg-white p-5 space-y-2 border-2 rounded w-full max-h-64 overflow-auto z-50">
                                    <li>
                                        <div className="flex bg-cyan-300 rounded-3xl py-[6px] justify-between px-4 text-center gap-[18px]">
                                            {['F', 'G', 'H', 'I', 'J'].map(letter => (
                                                <span
                                                    key={letter}
                                                    className="bg-white w-10  rounded-full px-1 py-[6px] text-center cursor-pointer"
                                                    onClick={() => handleLetterClick(letter)}
                                                >
                                                    {letter}
                                                </span>
                                            ))}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex bg-cyan-300 rounded-3xl py-[6px] justify-between px-4 text-center gap-[18px]">
                                            {['K', 'L', 'M', 'N', 'O'].map(letter => (
                                                <span
                                                    key={letter}
                                                    className="bg-white w-10  rounded-full px-1 py-[6px] text-center cursor-pointer"
                                                    onClick={() => handleLetterClick(letter)}
                                                >
                                                    {letter}
                                                </span>
                                            ))}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex bg-cyan-300 rounded-3xl py-[6px] justify-between px-4 text-center gap-[18px]">
                                            {['P', 'Q', 'R', 'S', 'T'].map(letter => (
                                                <span
                                                    key={letter}
                                                    className="bg-white w-10  rounded-full px-1 py-[6px] text-center cursor-pointer"
                                                    onClick={() => handleLetterClick(letter)}
                                                >
                                                    {letter}
                                                </span>
                                            ))}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex bg-cyan-300 rounded-3xl py-[6px] justify-between px-4 text-center gap-[18px]">
                                            {['U', 'V', 'W', 'X', 'Y'].map(letter => (
                                                <span
                                                    key={letter}
                                                    className="bg-white w-10  rounded-full px-1 py-[6px] text-center cursor-pointer"
                                                    onClick={() => handleLetterClick(letter)}
                                                >
                                                    {letter}
                                                </span>
                                            ))}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex bg-cyan-300 rounded-3xl py-[6px] justify-between px-4 text-center gap-[18px]">
                                            {['Z'].map(letter => (
                                                <span
                                                    key={letter}
                                                    className="bg-white w-10  rounded-full px-1 py-[6px] text-center cursor-pointer"
                                                    onClick={() => handleLetterClick(letter)}
                                                >
                                                    {letter}
                                                </span>
                                            ))}
                                        </div>
                                    </li>

                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Filter by Company Name */}
                    <div className="lg:w-[50%] shadow-lg md:shadow-2xl px-6 py-5 rounded-2xl border">
                        <h2 className="text-xl font-semibold">Filter By Industry</h2>
                        <div className="relative mt-8">
                            <button
                                tabIndex={0}
                                className="flex border border-red-500 px-5 py-3 rounded-full w-full justify-between m-1"
                                onClick={toggleDropdownCompanyName}
                            >
                                Find Industry
                                <IoIosArrowForward className="text-2xl text-center items-center ml-4" />
                            </button>
                            {isDropdownCompanyNameOpen && (
                                <ul className="absolute top-full left-0 mt-2 bg-white p-2 space-y-2 border-2 rounded w-full max-h-64 overflow-auto z-50">
                                    {companyNames?.map(name => (
                                        <li
                                            key={name}
                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                            onClick={() => handleCompanySelect(name)}
                                        >
                                            {name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Table companyInfo={companyInfo} />
        </div >
    );
};

export default Home;
