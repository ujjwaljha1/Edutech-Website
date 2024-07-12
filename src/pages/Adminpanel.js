// AdminPanel.js

import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <AdminCard title="Edit Page" imageSrc="/images/editpage.png" link="/editpage" />
            <AdminCard title="Adding new Data" imageSrc="/images/adminpage.png" link="/admin" />
            <AdminCard title="Placement" imageSrc="/images/placement.png" link="/placement" />
        </div>
    );
};

const AdminCard = ({ title, imageSrc, link }) => {
    return (
        <Link to={link} className="m-4 bg-white shadow-lg rounded-lg overflow-hidden w-64">
            <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </Link>
    );
};

export default AdminPanel;
