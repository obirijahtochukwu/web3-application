import React, { useState, useEffect } from 'react';
import { Web3Context } from 'contexts';
import * as scRequests from '../../../contexts/scRequests';

const Timer: React.FC<{ duration: number }> = ({ duration }) => {
    const [seconds, setSeconds] = useState(duration);
    const [bidTimeThreshold, setBidTimeThreshold] = React.useState(0);
    const { lastBidTimestamp } = React.useContext(Web3Context);

    //set seconds from bidtimethreshold from sc (copy from testRoute)
    

    React.useEffect(() => {
        scRequests.getBidTimeThreshold().then((value) => {
            setBidTimeThreshold(value);
        });
    }, [bidTimeThreshold]);

    useEffect(() => {
        handleReset();
    }, [lastBidTimestamp]);

    useEffect(() => {
        if (seconds > 0) {
            const intervalId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [seconds]);

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    };

    const handleReset = () => {
        setSeconds(duration);
    };

    return (
        <div>
            {seconds === 0 && (
                <>
                    <h1>Auction ended</h1>
                </>
            )}
            {seconds != 0 && (
                <>
                    <h3>Time left to bid</h3>
                    <div className='mb-3'>{formatTime(seconds)}</div>
                    {/* <button className='btn btn-primary mb-5' onClick={handleReset}>Reset</button> */}
                    <a href="#" className="btn btn-primary me-3">Place bid</a>
                    <a href="#" className="btn btn-secondary" title="Can only claim if auction is over and you are the winner!">Claim reward</a>
                </>
            )}
        </div>
    );
};

export default Timer;