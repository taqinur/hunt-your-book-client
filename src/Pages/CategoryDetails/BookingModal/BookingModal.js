import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ productName, price, _id, refetch}) => {
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const booking = {
            productName,
            name,
            location,
            email,
            phone,
            price
        }
    }

       
    const handleBookingProduct = id =>{
        fetch(`https://hunt-your-book-server.vercel.app/products/booked/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount> 0){
                refetch();
                toast.success('Booked successfully');
            }
        })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <h3 className="text-md font-bold">{price}</h3>
                    <form onSubmit={handleBookingProduct(_id)} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;