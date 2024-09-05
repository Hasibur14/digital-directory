import { Link, useLoaderData } from "react-router-dom";



const CompanyDetails = () => {

    const companyInfo = useLoaderData()

    const { _id, company_name, company_representative, membership_number, designation, nature_of_business, office_address, telephone, email, category } = companyInfo;

    return (
        <div className="max-w-4xl mx-auto my-12 border px-16 py-10 bg-neutral-50 shadow-lg rounded-lg">
            <Link to="/">
            <button></button>
            </Link >
            <div className="text-xl">
                <div className="lg:flex justify-between gap-14">
                    <img className="lg:w-[415px] rounded" src={"https://i.ibb.co/D4qQ9yZ/istockphoto-1335941248-612x612.jpg"} alt="" />
                    <div className="">
                        <img className="w-32 h-28" src={"https://i.ibb.co/cLxPNDY/title-a11.png"} alt="Company logo" />
                        <div>
                            <h2>Company Name</h2>
                            <h2 className="text-4xl font-bold">{company_name}</h2>
                            <h4>Representative</h4>
                            <h2 className="text-2xl font-bold">{company_representative}</h2>
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
                        <p>Objectively harness proactive synergy rather than top-line infrastructures. Holisticly seize.Monotonectally revolutionize process-centric architectures for clicks-and-mortar innovation. Rapidiously monetize 24/365.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Corporate Office</h2>
                        {office_address}
                    </div>
                    <div>
                        <h4> <span className="font-bold">Telephone:</span>  {telephone}</h4>
                        <h4>Email and WhatsApp</h4>
                        <h5> <span className="font-bold">Email: </span> {email}</h5>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default CompanyDetails;
