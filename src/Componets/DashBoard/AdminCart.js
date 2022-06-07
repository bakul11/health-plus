import React from 'react';
import swal from 'sweetalert';

const AdminCart = ({ userAdmin, index, admin, setAdmin }) => {
    const { email, role, _id } = userAdmin;


    //Make admin
    const handleMakeAdmin = () => {
        const url = `http://localhost:5000/user/admin/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    window.location.reload();
                    swal('Admin Create Success', 'Admin Create Successfully Done', 'success');
                }
            })
    }


    //Delete Admin 
    const handleRemoveAdmin = id => {
        const removeAdmin = window.confirm('Do You Want Delete Admin ?');
        if (removeAdmin) {
            const url = `http://localhost:5000/removeAdmin/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const remaningAdmin = admin.filter(admin => admin._id !== id);
                        setAdmin(remaningAdmin);
                        swal('Admin Delete Success', 'Admin Delete Successfully Done', 'success');
                    }
                })
        }
    }


    return (
        <tr className='fs-6'>
            <td className='pt-2 pb-2 ps-1 pe-1 '>{ index + 1 }</td>
            <td className='pt-2 pb-2 ps-1 pe-1'>{ email }</td>
            <td className='pt-2 pb-2 ps-1 pe-1'>{ role !== 'admin' ? <button className="btn btn-primary" onClick={ handleMakeAdmin }>Make Admin</button> : 'Already Admin' }</td>
            <td className='pt-2 pb-2 ps-1 pe-1'><button className="btn btn-danger" onClick={ () => handleRemoveAdmin(_id) }>Remove Admin</button></td>
        </tr>
    );
};

export default AdminCart;