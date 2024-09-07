import jsPDF from 'jspdf';
import 'jspdf-autotable';
import PropTypes from 'prop-types';
import { useState } from "react";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

const Table = ({ companyInfo }) => {
    const [visibleRows, setVisibleRows] = useState(10);
    const [filteredData, setFilteredData] = useState(companyInfo);

    const handleShowMore = () => {
        setVisibleRows((prevRows) => prevRows + 10);
    };


    //Delete service
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_API_URL}/companyDelete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        toast.success('Company Data has been deleted!');
                        setFilteredData(filteredData.filter(item => item._id !== _id));
                    })
            }
        });
    };


    // Download PDF
    const handlePDFDownload = () => {
        const doc = new jsPDF({
            orientation: 'landscape',
        });

        doc.text("Company Information", 14, 10);

        const tableColumn = [
            "No",
            "Company Name",
            "Company Representative",
            "Membership Number",
            "Designation",
            "Office Address",
            "Telephone",
            "Email"
        ];
        const tableRows = [];

        companyInfo?.forEach((item, index) => {
            const rowData = [
                index + 1,
                item.company_name,
                item.company_representative,
                item.membership_number,
                item.designation,
                item.office_address,
                item.telephone,
                item.email
            ];
            tableRows.push(rowData);
        });

        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 20,
            theme: 'striped',
            styles: {
                fontSize: 10,
                cellPadding: 2,
            },
            columnStyles: {
                0: { cellWidth: 15 },
                1: { cellWidth: 35 },
                2: { cellWidth: 35 },
                3: { cellWidth: 30 },
                4: { cellWidth: 30 },
                5: { cellWidth: 35 },
                6: { cellWidth: 50 },
                7: { cellWidth: 30 },
                8: { cellWidth: 50 },
            },
            margin: { top: 20 },
        });

        doc.save('company_info.pdf');
    };


    // Download Excel
    const handleExcelDownload = () => {
        const worksheet = XLSX.utils.json_to_sheet(
            companyInfo.map((item, index) => ({
                No: index + 1,
                CompanyName: item.company_name,
                CompanyRepresentative: item.company_representative,
                MembershipNumber: item.membership_number,
                Designation: item.designation,
                NatureOfBusiness: item.nature_of_business,
                OfficeAddress: item.office_address,
                Telephone: item.telephone,
                Email: item.email
            }))
        );
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "CompanyInfo");

        // Export the Excel file
        XLSX.writeFile(workbook, "company_info.xlsx");
    };


    return (
        <div className="shadow-2xl border rounded-2xl my-16 px-10 py-5">
            <div className="md:flex justify-between">
                <h2 className="text-2xl font-bold">Community</h2>
                <div className="flex gap-5 text-white mt-4 md:mt-0">
                    <Link to='/add-company-info'>
                        <button className="bg-green-500 text-center py-2 px-3 rounded cursor-pointer">
                            Add New Directory
                        </button>
                    </Link>
                    <button
                        onClick={handleExcelDownload}
                        className="bg-cyan-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-cyan-700">
                        Download Excel
                    </button>
                    <button
                        onClick={handlePDFDownload}
                        className="bg-purple-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-purple-700">
                        Download PDF
                    </button>
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
                                    {companyInfo?.slice(0, visibleRows).map((item, index) => (
                                        <tr
                                            key={index}
                                            className={`hover:bg-neutral-100 ${index % 2 === 0 ? 'bg-cyan-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}`}
                                        >
                                            <td className="font-medium dark:text-gray-200 whitespace-nowrap">
                                                <Link to={`/company/${item._id}`}>
                                                    <div
                                                        className="bg-green-400 rounded-r-full w-8  h-7  p-1 text-center items-center hover:bg-black">
                                                        <LuEye className='text-xl text-white hover:text-red-500' />
                                                    </div>
                                                </Link>

                                            </td>
                                            <td className="px-4 py-3 text-sm font-medium dark:text-gray-200 whitespace-nowrap text-center items-center">
                                                <div className="bg-teal-300 text-center rounded-full w-8 h-8 p-1.5 hover:bg-red-500 hover:text-white">
                                                    {index + 1}
                                                </div>
                                            </td>
                                            <td className="px-4 mx-8 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                <div className="flex items-center gap-x-2">
                                                    <img
                                                        className="object-cover w-8 h-8 rounded-full"
                                                        src={item.company_img}
                                                        alt="Company Representative" />
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 dark:text-white">{item.company_name}</h2>
                                                        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{item.category}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-3 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                <div className="flex items-center gap-x-2">
                                                    <img
                                                        className="object-cover w-8 h-8 rounded-full"
                                                        src={item.representative_img}
                                                        alt="Company Representative" />
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 dark:text-white">{item.company_representative}</h2>
                                                        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{item.designation}</p>
                                                    </div>
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
                                                    <CiEdit
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

            {visibleRows < companyInfo?.length && (
                <div className="flex justify-center items-center">
                    <button onClick={handleShowMore} className="btn bg-blue-400 hover:bg-blue-600 text-center rounded-lg">
                        <h3 className="px-3 py-1 text-white">Show More</h3>
                    </button>
                </div>
            )}

        </div>
    );
};


Table.propTypes = {
    companyInfo: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            company_name: PropTypes.string.isRequired,
            company_representative: PropTypes.string.isRequired,
            membership_number: PropTypes.string.isRequired,
            designation: PropTypes.string.isRequired,
            nature_of_business: PropTypes.string,
            office_address: PropTypes.string.isRequired,
            telephone: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Table;
