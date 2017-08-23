import React from 'react';
import PropTypes from 'prop-types';

Room.propTypes = {
  room: PropTypes.object,
  onExit: PropTypes.func
}

export default function Room({ room, onExit, onPickup }) {
  return (
    <div>
      <h2>{room.name}</h2>
      <p>You see: {room.items.map((item, i) => (
        <button key={i} onClick={() => onPickup(item)}>
          {item}
        </button>
      ))}</p>
      {room.doors.map((door, i) => {
        return (
          <button key={i} onClick={() => onExit(door)}>
            Door to {door.key}
          </button>
        );
      })}
    </div>
  );
}

