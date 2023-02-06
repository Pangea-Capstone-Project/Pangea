import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { Link } from "react-router-dom";
import React from "react";


const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">USERS</p>
          <Link to="/tenants" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/property" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Properties</span>
            </li>
          </Link>
          <Link to="/workorders" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Maintenance Requests</span>
            </li>
          </Link>
          <p className="title">SETTINGS</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <Link to="/signup-landlord" style={{ textDecoration: "none" }}>
            <li>
              <AdminPanelSettingsOutlinedIcon className="icon" />
              <span>Update Account</span>
            </li>
          </Link>
          <Link to="/add-property" style={{ textDecoration: "none" }}>
          <li>
            <AddHomeWorkOutlinedIcon className="icon" />
            <span>Add Properties</span>
          </li>
          </Link>
          <Link to="/add-unit" style={{ textDecoration: "none" }}>
          <li>
            <AddHomeOutlinedIcon className="icon" />
            <span>Add Unit</span>
          </li>
          </Link>
          <Link to="/add-tenant-unit" style={{ textDecoration: "none" }}>
          <li>
            <CoPresentIcon className="icon" />
            <span>Add Tenant to Unit</span>
          </li>
          </Link>
          <Link to="/addRent" style={{ textDecoration: "none" }}>
          <li>
            <AccountBalanceWalletIcon className="icon" />
            <span>Manage Payments</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
