import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import Logout from './logout';

const Settings = () => {
    return (
        <div className="dropdown dropdown-top dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1"><IoSettingsOutline /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24 items-center content-center">
                    <li><a><Logout />Logout</a></li>
                    <li><a></a></li>
                </ul>
        </div>
    );
}

export default Settings
