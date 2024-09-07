import { useState } from "react";

const FilterModal = ({ isOpen, onClose, onApply, companies }) => {
    const [filters, setFilters] = useState({
        companyName: '',
        companyRepresentative: '',
        designation: '',
        category: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const handleApply = () => {
        onApply(filters);
        onClose();
    };

    if (!isOpen) return null;

    // Extract unique values for the dropdowns
    const companyNames = [...new Set(companies.map(item => item.company_name))];
    const representatives = [...new Set(companies.map(item => item.company_representative))];
    const designations = [...new Set(companies.map(item => item.designation))];
    const categories = [...new Set(companies.map(item => item.category))];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 lg:w-1/3">
                <h2 className="text-2xl font-semibold mb-4">Filter Download</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-bold">Company Name</label>
                        <select
                            name="companyName"
                            value={filters.companyName}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-neutral-700 border-b-4 shadow-sm bg-neutral-100 p-2">
                            <option value="">Select Company Name</option>
                            {companyNames.map(name => (
                                <option key={name} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold">Company Representative</label>
                        <select
                            name="companyRepresentative"
                            value={filters.companyRepresentative}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-neutral-700 border-b-4 shadow-sm bg-neutral-100 p-2">
                            <option value="">Select Representative</option>
                            {representatives.map(rep => (
                                <option key={rep} value={rep}>{rep}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold">Designation</label>
                        <select
                            name="designation"
                            value={filters.designation}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-neutral-700 border-b-4 shadow-sm bg-neutral-100 p-2">
                            <option value="">Select Designation</option>
                            {designations.map(des => (
                                <option key={des} value={des}>{des}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold">Category</label>
                        <select
                            name="category"
                            value={filters.category}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-neutral-700 border-b-4 shadow-sm bg-neutral-100 p-2">
                            <option value="">Select Category</option>
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
                        onClick={onClose}>
                        Cancel
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        onClick={handleApply}>
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
