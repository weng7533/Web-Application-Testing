import React, { useState, useEffect } from 'react';
import Display from './Display';
import { useLocalStorage } from '../src/hooks/useLocalStorage';
export default () => {
    const [balls, setBalls] = useLocalStorage('ballsCount', 0);
    const [strikes, setStrkes] = useLocalStorage('strikesCount', 0)




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
                <button data-testid="Strike" onClick={strikeClick}>Strike</button>
                <button data-testid="Ball" onClick={ballClick}>Ball</button>
                <button data-testid="Foul" onClick={foulClick}>Foul</button>
                <button data-testid="Hit" onClick={HitClick}>Hit</button>
            </div>
        </div>
    )

}