import React from 'react';
import Box from './Box';
interface RowCompletedProps {
    word: string,
    solution: string,
}

export const RowCompleted = ({ word, solution }: RowCompletedProps) => {
    return <div>

        {
            Array.from(Array(5)).map((_, i) => {
                <Box key={i} value={''} status={ } />
            })
        }
    </div>;
};
