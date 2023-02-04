import React, { useEffect } from "react";
import './singletenant.css'
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom'
import { getTenant } from './singleTenantSlice'


const SingleTenant = () => {

    const tenant = useSelector(state => {
        return state.tenant
    })
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(getTenant(id))
    }, [])

    return (
        <div>
            <div id="rentDiv">
                <p id="tenName">{tenant.name}</p>
                <div id="rentBox">
                    <p id="rentStatus">Rent Status: {tenant.rentPaid ? "Paid" : "Owed"}</p>
                    <p id="rentNum" className="paid owed">{tenant.unit && tenant.unit.rentAmount}</p>
                </div>
            </div>
            <div className="boxes">
                    <p>Tenant Information</p>
                    <p>{tenant.unitId}</p>
                    <p>{tenant.phoneNumber}</p>
                    <p>{tenant.email}</p>
                    <p>{tenant.leaseStartDate}</p>
                    <p>{tenant.leaseEndDate}</p>
                </div>
            <div id="ulDiv">
                <ul id="tenantCards">
                <li className="boxes">
                        <p>Messages</p>
                    </li>
                    <li className="boxes">
                        <p>Work Orders</p>
                    </li>
                    <li className="boxes">
                        <p>Payment History</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SingleTenant