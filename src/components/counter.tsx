"use cleint"
import React, { useState, useEffect } from "react"
import Logo from '/public/images/tdev.png'
import { Anton } from 'next/font/google'

import TimeCounter from "./time"


const anton = Anton({ subsets: ['latin'], weight: ['400'], variable: "--font-anton" })
export const Counter = ({ target }: {target: string }) => {

    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new window.Date();
            const targetDate = new window.Date(target);
            const distance = targetDate - now;

            if (distance > 0) {
                const totalSeconds = Math.floor(distance / 1000);
                const days = Math.floor(totalSeconds / (3600 * 24));
                const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;

                setDays(days < 10 ? `0${days}` : days.toString());
                setHours(hours < 10 ? `0${hours}` : hours.toString());
                setMinutes(minutes < 10 ? `0${minutes}` : minutes.toString());
                setSeconds(seconds < 10 ? `0${seconds}` : seconds.toString());
            } else {
                setDays('00');
                setHours('00');
                setMinutes('00');
                setSeconds('00');
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [target]);

    return <div data-aos="fade-up" data-aos-delay="500" className="flex gap-2 my-5  md:my-10">
       <span className="mr-3"> <TimeCounter doted={false} time={days} label="Jours" /></span>
        <TimeCounter doted={false} time={hours} label="Heur" />
        <span className="text-4xl md:text-6xl font-bold uppercase">:</span>
        <TimeCounter doted={true} time={minutes} label="minutes" />
        <span className="text-4xl md:text-6xl font-bold uppercase">:</span>
        <TimeCounter doted={true} time={seconds} label="Second" />

    </div>



}