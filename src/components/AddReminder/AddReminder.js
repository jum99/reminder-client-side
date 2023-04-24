import React from 'react';
import './AddReminder.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';


const AddReminder = () => {

    const { user } = useAuth();


    const { register, reset, handleSubmit } = useForm();

    const onSubmit = data => {

        const reminderData = {
            // ...currentUser,
            name: data.name,
            date: data.date,
            time: data.time,
            timeRange: data.timeRange,
            email: user?.email,
            // orderTime: new Date()
        }

        alert('Reminder added');
        reset();
        // history.replace(from);

        const url = `https://reminder-website-server-production.up.railway.app/reminders`
        console.log(reminderData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reminderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your reminder added successfully');
                }
            })

    };

    return (
        <div>
            <div className="shadow add-form p-4 mb-2">
                <h2 className="mb-5 text-center">Add Reminder</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Reminder Name</label>
                                <input type="text" className="form-control" name="name"  {...register("name")} placeholder="Reminder Name" required />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Date</label>
                            <input type="text" className="form-control" name="date"  {...register("date")} placeholder="DD/MM/YYYY" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Time</label>
                            <input type="text" className="form-control" name="time"  {...register("time")} placeholder="Time" required />
                            <select {...register("timeRange")}>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>


                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddReminder;