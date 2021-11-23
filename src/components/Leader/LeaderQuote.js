import React from 'react';

export const LeaderQuote = ({ str }) => str ? (
    <div className="italic py-2 text-xl">
        <p>{str}</p>
    </div>
): <></>;

