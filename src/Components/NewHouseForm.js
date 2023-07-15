import React, { useState } from "react";

export const NewHouseForm = (props) => {
    const [houseName, setHouseName] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        props.addHouse({"name": houseName});
        setHouseName("");
    };
    return (
        <div className="AddHouseForm">
            <h2 className="text-shadow">Add New House</h2>
            <form onSubmit={onSubmit}>
                <label>
                    <input
                        type="text"
                        value={houseName}
                        onChange={(e) => setHouseName(e.target.value)}
                    />
                </label>
                <button type="submit">Add House!</button>
            </form>
        </div>
    )
}