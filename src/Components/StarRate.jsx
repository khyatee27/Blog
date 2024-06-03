import React from 'react';

function StarRate({ rating, setRating }) {
    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => {
                return (
                    <span
                        key={star}
                        className='star'
                        style={{
                            cursor: 'pointer',
                            color: rating >= star ? 'gold' : 'gray',
                            fontSize: `35px`,
                        }}
                        onClick={() => {
                            setRating(star);
                        }}
                    >
                        {' '}
                        ★{' '}
                    </span>
                );
            })}
        </div>
    );
}

export default StarRate;