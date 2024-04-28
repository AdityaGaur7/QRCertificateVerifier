import React, { useState } from "react";
import axios from "axios";

const AddCertificateForm = () => {
  const [certificateData, setCertificateData] = useState({
    ReferenceNumber: "",
    CertificateNumber: "",
    NAME: "",
    Designation: "",
    Institute: "",
    WorkshopOrgeniser: "",
    WorkshopName: "",
    WorkshopDate: "",
    ProfilePhoto: "",
    VerifyURL: "",
    QRCodeURL: "",
  });

  const handleChange = (e) => {
    setCertificateData({
      ...certificateData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/certificates", certificateData);
      alert("Certificate added successfully!");
      setCertificateData({
        ReferenceNumber: "",
        CertificateNumber: "",
        NAME: "",
        Designation: "",
        Institute: "",
        WorkshopOrgeniser: "",
        WorkshopName: "",
        WorkshopDate: "",
        ProfilePhoto: "",
        VerifyURL: "",
        QRCodeURL: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error adding certificate");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add Certificate</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <label className="block">Reference Number:</label>
        <input
          type="text"
          name="ReferenceNumber"
          value={certificateData.ReferenceNumber}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label className="block">Certificate Number:</label>
        <input
          type="number"
          name="CertificateNumber"
          value={certificateData.CertificateNumber}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label className="block">Name:</label>
        <input
          type="text"
          name="NAME"
          value={certificateData.NAME}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label className="block">Designation:</label>
        <input
          type="text"
          name="Designation"
          value={certificateData.Designation}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label className="block">Institute:</label>
        <input
          type="text"
          name="Institute"
          value={certificateData.Institute}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <label className="block">Workshop Organizer:</label>
        <input
          type="text"
          name="WorkshopOrgeniser"
          value={certificateData.WorkshopOrgeniser}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label className="block">Workshop Name:</label>
        <input
          type="text"
          name="WorkshopName"
          value={certificateData.WorkshopName}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label className="block">Workshop Date:</label>
        <input
          type="text"
          name="WorkshopDate"
          value={certificateData.WorkshopDate}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label className="block">Profile Photo:</label>
        <input
          type="text"
          name="ProfilePhoto"
          value={certificateData.ProfilePhoto}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label className="block">Verify URL:</label>
        <input
          type="text"
          name="VerifyURL"
          value={certificateData.VerifyURL}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label className="block">QR Code URL:</label>
        <input
          type="text"
          name="QRCodeURL"
          value={certificateData.QRCodeURL}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />

        <div className="col-span-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Certificate
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCertificateForm;
