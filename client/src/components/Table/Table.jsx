const Table = ({ companyInfo }) => {
    return (
        <div className="shadow-2xl border rounded-2xl my-16 p-10">
            <div className="flex justify-between">
                <h2 className="text-xl font-bold">Community</h2>
                <div className="flex gap-5 text-white">
                    <div className="bg-green-500 py-1 px-3 rounded-full">
                        <h4 className="text-sm font-semibold">Add New Directory</h4>
                    </div>
                    <div className="bg-yellow-500 py-1 px-3 rounded-full">
                        <h4 className="text-sm font-semibold">Filter Table</h4>
                    </div>
                    <div className="bg-cyan-500 py-1 px-3 rounded-full">
                        <h4 className="text-sm font-semibold">Excel</h4>
                    </div>
                    <div className="bg-purple-500 py-1 px-3 rounded-full">
                        <h4 className="text-sm font-semibold">PDF</h4>
                    </div>
                </div>
            </div>

            {/* table col-row */}
            <div className="flex flex-col my-5">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-red-50 dark:bg-gray-800 font-bold">
                                    <tr>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            No
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Company Name
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Company Representative
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Membership Number
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Designation of Company
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Nature of Business
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Office Address
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    {
                                        companyInfo?.map((item, index) => (
                                            <tr key={index} className="hover:bg-cyan-100">
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                    {index + 1}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    {item.company_name}
                                                </td>

                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                                        <div>
                                                            {item.company_representative}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                    {item.membership_number}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    {item.designation}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    {item.nature_of_business}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    {item.office_address}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="btn bg-blue-400 hover:bg-blue-600 text-center rounded-lg">
                    <h3 className="px-3 py-1 text-white">Show More</h3>
                </div>
            </div>

        </div>
    );
};

export default Table;
