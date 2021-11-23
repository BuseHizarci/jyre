import React from 'react';

export const LeaderExemplar = ({ str }) => str ? (
    <div className="pb-2">
        <p>{str}</p>
    </div>
) : <></>;

