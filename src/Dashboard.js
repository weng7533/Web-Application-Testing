import React, { useState, useEffect } from 'react';
import Display from './Display';

export default () => {

    const [balls, setBalls] = useState(0)
    const [strikes, setStrkes] = useState(0)

    useEffect(() => {
        if (balls === 4 || strikes === 3) {
            setStrkes(0);
            setBalls(0);
        }

    }, [balls, strikes])


    const strikeClick = () => {
        setStrkes(strikes + 1)
    }

    const ballClick = () => {
        setBalls(balls + 1)
    }

    const foulClick = () => {
        if (strikes < 2) {
            setStrkes(strikes + 1)
        }
    }

    const HitClick = () => {
        setBalls(0);
        setStrkes(0);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }



    return (
        <div>
            <Display balls={balls} strikes={strikes} />
            <div onSubmit={handleSubmit}>
                <button onClick={strikeClick}>Strike</button>
                <button onClick={ballClick}>Ball</button>
                <button onClick={foulClick}>Foul</button>
                <button onClick={HitClick}>Hit</button>
            </div>
        </div>
    )

}