import React from 'react';
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse, deleteHouse } = props;
    
    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse)
    }
    
    const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label> {`${room.name} Area: ${room.area}`}</label>
                    <button onClick={(e) => deleteRoom(room._id)} className='button-delete'> Delete </button>
                </li>
            ))}
        </ul>
    )

    return (
        <div className='house-container'>
            <span><h1 className='text-shadow'>{house.name}</h1> <button onClick={(e) => deleteHouse(house._id)} className='button-delete'> Delete </button></span>
            {
                rooms({ rooms, houseId: house._id, deleteRoom })
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
}