import React from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
    const history = useHistory();

    const handleButtonClick = (page) => {
        history.push(page);
    };

    return (
        <div className="dashboard">
            <button className="dashboard-button" onClick={() => handleButtonClick('/page1')}>
                Button 1
            </button>
            <button className="dashboard-button" onClick={() => handleButtonClick('/page2')}>
                Button 2
            </button>
            <button className="dashboard-button" onClick={() => handleButtonClick('/page3')}>
                Button 3
            </button>
            <button className="dashboard-button" onClick={() => handleButtonClick('/page4')}>
                Button 4
            </button>
        </div>
    );
};

export default Dashboard;