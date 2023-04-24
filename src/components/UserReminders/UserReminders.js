import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const UserReminders = () => {

    const { user } = useAuth();
    console.log(user?.email);
    const [reminders, setReminders] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/userReminders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReminders(data));
    }, [])

    const deleteItem = id => {
        console.log("id", id);
        fetch(`http://localhost:5000/cancelItem/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully', result)
                if (result) {
                    alert('This reminder is deleted! Please refresh page')
                }
            })
    }

    const markComplete = e => {
        e.target.value = "Completed";
    }

    return (
        <div className="mt-3">

            <h2 className='text-center pb-5'>My Reminders</h2>


            <table className="table border shadow mt-3">
                <thead className="thead-dark bg-dark" style={{ color: 'white' }} >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Reminder Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th >Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        reminders.map((pd, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{pd.name}</td>
                                <td>{pd.date}</td>
                                <td>{pd.time} {pd.timeRange}</td>

                                <td>
                                    <input onClick={markComplete} type='button' defaultValue="Mark As Complete" className="btn btn-success me-2" />
                                </td>

                                <td>
                                    <button onClick={() => deleteItem(pd._id)} className="btn btn-danger me-2" >Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
};

export default UserReminders;