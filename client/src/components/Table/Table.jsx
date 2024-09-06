import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import search from "../../assets/search.png";
import useAxios from "../../hooks/useAxios";
import useCompany from "../../hooks/useCompany";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import FilterModal from "../Modal/FilterModal";




const Table = () => {

    const [company, loading, refetch] = useCompany();
    const axiosPublic = useAxios()

    const [visibleRows, setVisibleRows] = useState(10);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filters, setFilters] = useState({});

    const handleShowMore = () => {
        setVisibleRows((prevRows) => prevRows + 10);
    };

    const toggleFilterModal = () => {
        setIsFilterModalOpen(!isFilterModalOpen);
    };

    const handleFilterClick = () => {
        setIsModalOpen(true);
    };

    const handleApplyFilters = (filterValues) => {
        setFilters(filterValues);
        // Implement your filtering logic here
    };



    //Delete service
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/companyDelete/${_id}`);
                if (res.data.deletedCount > 0) {
                    refetch()
                    toast.success('Company Data has been deleted!');
                }
            }
        });
    };


    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div className="shadow-2xl border rounded-2xl my-16 px-10 py-5">
            <div className="md:flex justify-between">
                <h2 className="text-2xl font-bold">Community</h2>
                <div className="flex gap-5 text-white mt-4 md:mt-0">
                    <div className="bg-green-500 py-1 px-3 rounded cursor-pointer">
                        <Link to='/add-company-info'>
                            <h4 className="text-sm font-semibold">Add New Directory</h4>
                        </Link>
                    </div>
                    <button onClick={handleFilterClick} className="bg-yellow-500 py-1 px-3 rounded">
                        <h4 className="text-sm font-semibold">Filter Table</h4>
                    </button>
                    <div className="bg-cyan-500 py-1 px-3 rounded cursor-pointer">
                        <h4 className="text-sm font-semibold">Excel</h4>
                    </div>
                    <div className="bg-purple-500 py-1 px-3 rounded cursor-pointer">
                        <h4 className="text-sm font-semibold">PDF</h4>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="flex flex-col my-5">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="border-b-2 dark:bg-gray-800 font-bold">
                                    <tr>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left text-gray-900 dark:text-gray-400"></th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left text-gray-900 dark:text-gray-400">No</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left text-gray-900 dark:text-gray-400">Company Name</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left text-gray-900 dark:text-gray-400">Company Representative</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left text-gray-900 dark:text-gray-400">Membership Number</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left text-gray-900 dark:text-gray-400">Designation of Company</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left text-gray-900 dark:text-gray-400">Nature of Business</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left text-gray-900 dark:text-gray-400">Office Address</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left text-gray-900 dark:text-gray-400">Telephone</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left uppercase text-gray-900 dark:text-gray-400">Email</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left uppercase text-gray-900 dark:text-gray-400">View</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left uppercase text-gray-900 dark:text-gray-400">Edit</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left uppercase text-gray-900 dark:text-gray-400">Delete</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:divide-gray-700 dark:bg-gray-900">
                                    {company?.slice(0, visibleRows).map((item, index) => (
                                        <tr
                                            key={index}
                                            className={`hover:bg-neutral-100 ${index % 2 === 0 ? 'bg-cyan-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}`}
                                        >
                                            <td className="font-medium dark:text-gray-200 whitespace-nowrap">
                                                <Link to={`/company/${item._id}`}>
                                                    <div
                                                        className="bg-blue-200 rounded-r-full w-10  h-100">
                                                        <img className=" p-1" src={search} alt="search" />
                                                    </div>
                                                </Link>

                                            </td>
                                            <td className="px-4 py-3 text-sm font-medium dark:text-gray-200 whitespace-nowrap">
                                                <div className="bg-teal-300 text-center rounded-full p-3">
                                                    {index + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                <div className="flex items-center gap-x-2">
                                                    <img className="object-cover w-8 h-8 rounded-full" src={"https://i.ibb.co/mFjYLYS/titleImg.png"} alt="Company Representative" />
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 dark:text-white">{item.company_name}</h2>
                                                        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{item.category}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-3 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                <div className="flex items-center gap-x-2">
                                                    <img className="object-cover w-8 h-8 rounded-full" src={"https://i.ibb.co/7Ymcn37/Ellipse-1.png"} alt="Company Representative" />
                                                    <div>{item.company_representative}</div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm whitespace-nowrap">{item.membership_number}</td>
                                            <td className="px-4 py-3 text-sm dark:text-gray-300 whitespace-nowrap">{item.designation}</td>
                                            <td className="px-4 py-3 text-sm dark:text-gray-300 whitespace-nowrap">{item.nature_of_business}</td>
                                            <td className="px-4 py-3 text-sm dark:text-gray-300 whitespace-nowrap">{item.office_address}</td>
                                            <td className="px-4 py-3 text-sm dark:text-gray-300 whitespace-nowrap">{item.telephone}</td>
                                            <td className="px-4 py-1 text-sm dark:text-gray-300 whitespace-nowrap">{item.email}</td>
                                            <td className="p-3">
                                                <Link to={`/company/${item._id}`}>
                                                    <FaRegEye

                                                        className="text-3xl p-1 text-white bg-orange-400 hover:scale-110 rounded" />
                                                </Link>

                                            </td>
                                            <td className="p-3">
                                                <Link to={`/company-update/${item._id}`}>
                                                    <MdOutlineBrowserUpdated
                                                        className="text-3xl p-1 text-white bg-green-500 hover:scale-110 rounded" />
                                                </Link>
                                            </td>
                                            <td className="p-3">
                                                <RiDeleteBinLine
                                                    onClick={() => handleDelete(item._id)}
                                                    className="text-3xl p-1 text-white bg-red-600 hover:scale-110 rounded" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {visibleRows < company?.length && (
                <div className="flex justify-center items-center">
                    <button onClick={handleShowMore} className="btn bg-blue-400 hover:bg-blue-600 text-center rounded-lg">
                        <h3 className="px-3 py-1 text-white">Show More</h3>
                    </button>
                </div>
            )}

            <FilterModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onApply={handleApplyFilters}
            />
        </div>
    );
};

export default Table;
