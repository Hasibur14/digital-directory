import { TiArrowBack } from "react-icons/ti";
import { Link, useLoaderData } from "react-router-dom";
import logoImg from "../../../src/assets/logo.png";


const CompanyDetails = () => {

    const companyInfo = useLoaderData()

    const { company_name, company_img, company_representative, representative_img, membership_number, designation, office_address, telephone, email, whatsapp, company_profile } = companyInfo;

    return (
        <div className="px-4">
            <div className="max-w-4xl mx-auto my-12 border px-10 md:px-16  py-6 lg:py-10  bg-neutral-50 shadow-lg rounded-xl ">
                <div className=" flex justify-end mb-5 md-mb-0">
                    <Link to="/">
                        <button className="btn bg-blue-900 rounded-xl cursor-pointer px-5 text-white hover:bg-blue-500"><TiArrowBack className="text-2xl" /> Go Back</button>
                    </Link >
                </div>
                <div className="text-xl space-y-4">
                    <div className="lg:flex gap-16">
                        <img
                            className="lg:w-[415px] h-96 rounded-xl border hover:scale-105 duration-300 transition"
                            src={representative_img}
                            alt="representative image" />
                        <div className="">
                            <img
                                className="w-32 h-28 my-5 lg:my-0 object-cover"
                                src={company_img}
                                alt="Company logo" />
                            <div className="space-y-5 lg:space-y-0">
                                <div>
                                    <h2>Company Name</h2>
                                    <h2 className="text-4xl font-bold">{company_name}</h2>
                                </div>
                                <div>
                                    <h4>Representative</h4>
                                    <h2 className="text-2xl font-bold">{company_representative}</h2>
                                </div>
                                <h4>{designation}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-2xl font-bold">Membership Number</h4>
                            <h4 className="font-semibold">{membership_number}</h4>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Company Profile</h2>
                            <p>{company_profile}</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Corporate Office</h2>
                            {office_address}
                        </div>
                        <div>
                            <h4> <span className="font-bold">Telephone:</span>  {telephone}</h4>
                            <h4>Email and WhatsApp No.</h4>
                            <h5> <span className="font-bold">Email: </span> {email}</h5>
                            <h5> <span className="font-bold">Whatsapp: </span> {whatsapp}</h5>

                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                <h4 className="font-semibold ">Powered By
                    <img className="w-16 ml-2 bg-slate-600 rounded" src={logoImg} alt="360D" />
                  </h4>
            </div>
            </div>
        </div>
    );
};

export default CompanyDetails;
