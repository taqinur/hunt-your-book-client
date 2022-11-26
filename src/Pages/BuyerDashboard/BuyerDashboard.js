import React from 'react';

const BuyerDashboard = () => {
    return (
        <div className='my-8'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="" />
                                        </div>
                                    </div>
                                    
                                        <div className="font-bold">Hart Hagerty</div>
                                    
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-primary btn-xs">Pay Now</button>
                            </th>
                        </tr>

                    </tbody>

                    

                </table>
            </div>
        </div>
    );
};

export default BuyerDashboard;