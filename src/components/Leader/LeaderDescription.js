import React from 'react';
import Text from "../Text";

export const LeaderDescription = ({ desc, itemUniq }) => {
    if (!desc || !desc.length || !itemUniq) return <></>;

    return (
        <div className="pb-2">
            <Text
                prefix={`accordion_${itemUniq}_desc`}
                titles={desc}
            />
        </div>
    );
}
