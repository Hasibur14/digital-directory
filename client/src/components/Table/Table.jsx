import { useState } from "react";
import search from "../../assets/search.png";
import FilterModal from "../Modal/FilterModal";

const Table = ({ companyInfo }) => {
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

    return (
        <div className="shadow-2xl border rounded-2xl my-16 px-10 py-5">
            <div className="md:flex justify-between">
                <h2 className="text-2xl font-bold">Community</h2>
                <div className="flex gap-5 text-white mt-4 md:mt-0">
                    <div className="bg-green-500 py-1 px-3 rounded cursor-pointer">
                        <h4 className="text-sm font-semibold">Add New Directory</h4>
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
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:divide-gray-700 dark:bg-gray-900">
                                    {companyInfo?.slice(0, visibleRows).map((item, index) => (
                                        <tr
                                            key={index}
                                            className={`hover:bg-neutral-100 ${index % 2 === 0 ? 'bg-cyan-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}`}
                                        >
                                            <td className="font-medium dark:text-gray-200 whitespace-nowrap">
                                                <div className="bg-blue-200 rounded-r-full">
                                                    <img className="w-20 h-12 p-1" src={search} alt="search" />
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm font-medium dark:text-gray-200 whitespace-nowrap">
                                                <div className="bg-teal-300 text-center rounded-full p-3">
                                                    {index + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                <div className="flex items-center gap-x-2">
                                                    <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Company Representative" />
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 dark:text-white">{item.company_name}</h2>
                                                        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{item.category}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-3 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                <div className="flex items-center gap-x-2">
                                                    <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Company Representative" />
                                                    <div>{item.company_representative}</div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm whitespace-nowrap">{item.membership_number}</td>
                                            <td className="px-4 py-3 text-sm dark:text-gray-300 whitespace-nowrap">{item.designation}</td>
                                            <td className="px-4 py-3 text-sm dark:text-gray-300 whitespace-nowrap">{item.nature_of_business}</td>
                                            <td className="px-4 py-3 text-sm dark:text-gray-300 whitespace-nowrap">{item.office_address}</td>
                                            <td className="px-4 py-3 text-sm dark:text-gray-300 whitespace-nowrap">{item.telephone}</td>
                                            <td className="px-4 py-1 text-sm dark:text-gray-300 whitespace-nowrap">{item.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {visibleRows < companyInfo?.length && (
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
