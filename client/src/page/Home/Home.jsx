import { useEffect, useState } from "react";
import Table from "../../components/Table/Table";

const Home = () => {

    const [companyInfo, setCompanyInfo] = useState([]);

    useEffect(() => {
        fetch('companyData.json')
            .then(res => res.json())
            .then(data => setCompanyInfo(data));
    }, []);

console.log(companyInfo)
    return (
        <div className="container mx-auto my-10 p-4 lg:p-0">
            <div>
                <div className="lg:flex justify-between  shadow-2xl border rounded-xl w-full p-6">
                    <h2 className="text-xl font-bold">Last Edited</h2>

                    <div className="bg-cyan-200 flex space-x-3 rounded-full p-3">
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            A
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            B
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            C
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            D
                        </div>
                    </div>
                    <div className="bg-cyan-200 flex space-x-3 rounded-full p-3">
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            E
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            F
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            G
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            G
                        </div>
                    </div>
                    <div className="bg-cyan-200 flex space-x-3 rounded-full p-3">
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            I
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            B
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            J
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            K
                        </div>
                    </div>
                    <div className="bg-cyan-200 flex space-x-3 rounded-full p-3">
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            L
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            M
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            N
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            O
                        </div>
                    </div>
                    <div className="bg-cyan-200 flex space-x-3 rounded-full p-3">
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            P
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            Q
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            R
                        </div>
                        <div className="w-8 p-1 text-center font-bold rounded-box bg-white">
                            S
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