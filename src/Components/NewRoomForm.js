import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState("");
    const [area, setArea] = useState("");

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : "");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName("");
            setArea("");
        } else {
            console.log(`invalid input made`)
        }
    };

    return (
        <div>
            <h4 className='text-shadow'>Add New Room</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type='number'
                    placeholder='area'
                    value={area}
                    onChange={handleAreaInput}
                />
                <button type='submit'>Add!</button>
            </form>
        </div>
    )
}