import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <Link to="/surveys/new" className="btn-floating btn-large red">
                        <i className="material-icons">add</i>
                    </Link>
                </a>
            </div>
        </div>
    );
};

export default Dashboard;