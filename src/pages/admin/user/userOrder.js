import React from 'react';
import {$authHost} from "../../../http";

const UserOrder = () => {
    const getOrder = async ()=>{
        const res = await $authHost.get('api/v1/orders/')
    }

    const orderUser =()=>{

    }
    return (
        <div>
            {orderUser}
        </div>
    );
};

export default UserOrder;
