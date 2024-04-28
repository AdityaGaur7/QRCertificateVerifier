import React, { useState } from 'react';
import axios from 'axios';

const FindCertificateForm = () => {
    const [certificateId, setCertificateId] = useState('');
    const [certificate, setCertificate] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setCertificateId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5000/certificates/${certificateId}`);
            setCertificate(response.data);
            setError('');
        } catch (error) {
            setCertificate(null);
            setError('Certificate not found');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-screen m-auto">
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Find Certificate</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <label htmlFor="certificateId" className="block">Enter Certificate ID:</label>
                <input
                    type="text"
                    id="certificateId"
                    value={certificateId}
                    onChange={handleInputChange}
                    required
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Find Certificate</button>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {certificate && (
                <div className="border border-gray-300 rounded-md p-4 mt-4">
                    <p className="mb-2"><span className="font-bold">SNo:</span> {certificate["SNo"]}</p>
                    <p className="mb-2"><span className="font-bold">Name:</span> {certificate["Name"]}</p>
                    <p className="mb-2"><span className="font-bold">Roll Number:</span> {certificate["RollNumber"]}</p>
                    <p className="mb-2"><span className="font-bold">Certificate Data:</span> {certificate["CertificateData"]}</p>
                    <p className="mb-2"><span className="font-bold">Post:</span> {certificate["Post"]}</p>
                    <p className="mb-2"><span className="font-bold">Serial No:</span> {certificate["SerialNo"]}</p>
                    <p className="mb-2"><span className="font-bold">Certificate Number:</span> {certificate["CertificateNumber"]}</p>
                </div>
            )}
        </div>
    </div>
    
    );
};

export default FindCertificateForm;
