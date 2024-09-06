import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const CompanyUpdate = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const company_name = form.companyName.value;
        const company_img = form.companyImg.value;
        const company_representative = form.representative.value;
        const representative_img = form.representativeImg.value;
        const category = form.category.value;
        const membership_number = form.membershipNo.value;
        const designation = form.designation.value;
        const nature_of_business = form.natureBusiness.value;
        const office_address = form.address.value;
        const telephone = form.telephone.value;
        const email = form.email.value;
        const whatsapp = form.whatsapp.value;
        const company_profile = form.companyProfile.value;

        // const price = parseFloat(form.price.value)

        const updateCompany = { company_name, company_img, company_representative, representative_img, category, membership_number, designation, nature_of_business, office_address, telephone, email, whatsapp, company_profile };

        console.log(updateCompany);


        fetch(`${import.meta.env.VITE_API_URL}/company-update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCompany)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Update successfully');
                    navigate("/");
                }
            })
    }


    return (
        <div className='relative my-6 p-4 md:p-0'>
            <div className='flex justify-center items-center relative '>
                <section className="container p-8 lg:p-16 mx-auto rounded-md shadow-md bg-opacity-30 bg-gray-400 mt-10">
                    <h2 className="text-3xl font-bold capitalize text-center ">update Company info</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-black font-semibold ">Company Name</label>
                                <input
                                    id="companyName"
                                    name='companyName'
                                    type="text"
                                    placeholder='Enter Company name'
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-b-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-black font-semibold" >Company Image URL</label>
                                <input
                                    id="companyImg"
                                    name='companyImg'
                                    type="Company Image"
                                    placeholder='image URL'
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                            </div>

                            <div>
                                <label className="text-black font-semibold" >Company Representative</label>
                                <input
                                    id="representative"
                                    name='representative'
                                    type="text"
                                    placeholder='Enter Company Representative'
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-black font-semibold" >Image URL</label>
                                <input
                                    id="representativeImg"
                                    name='representativeImg'
                                    type="text"
                                    placeholder='image URL'
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-black font-semibold" >Category</label>
                                <input
                                    id="category"
                                    name='category'
                                    type="text"
                                    placeholder='Enter company category'
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-black font-semibold" >Membership Number</label>
                                <input
                                    id="membershipNo"
                                    name='membershipNo'
                                    type="number"
                                    placeholder='Enter Membership Number'
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div >
                                <label className="text-black font-semibold" >Designation of Company</label>
                                <input
                                    id="designation"
                                    name='designation'
                                    type="text"
                                    placeholder='Enter Designation of Company'
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div >
                                <label className="text-black font-semibold" >Nature of Business</label>
                                <input
                                    id="natureBusiness"
                                    name='natureBusiness'
                                    type="text"
                                    placeholder='Enter Nature of Business'
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div >
                                <label className="text-black font-semibold" >Office Address</label>
                                <input
                                    id="address"
                                    name='address'
                                    type="text"
                                    placeholder='Enter Office address'
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div >
                                <label className="text-black font-semibold" >Telephone</label>
                                <input
                                    id="telephone"
                                    name='telephone'
                                    type="number"
                                    placeholder='Enter the Telephone'
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div >
                                <label className="text-black font-semibold" >Email</label>
                                <input
                                    id="email"
                                    name='email'
                                    type="email"
                                    placeholder='Service area'
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div >
                                <label className="text-black font-semibold" >Whatsapp</label>
                                <input
                                    id="whatsapp"
                                    name='whatsapp'
                                    type="number"
                                    placeholder='whatsapp'
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                        </div>

                        <div className='mt-5'>
                            <label className="text-black font-semibold" >Company Profile</label>
                            <textarea
                                id="bio"
                                name='companyProfile'
                                placeholder="Description"
                                required
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button className="btn px-14 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-cyan-500 rounded-md hover:bg-cyan-700 focus:outline-none ">UPDATE</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default CompanyUpdate;