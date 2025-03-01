import React, { useState, useEffect } from 'react'; // Importe o useState
import PatternDivider from "../assets/images/pattern-divider-mobile.svg";
import PatternDividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import IconDice from "../assets/images/icon-dice.svg";

export function Card() {
    const [conselho, setConselho] = useState(''); 
    const [slipId, setSlipId] = useState('')
    const buscaConselhoAleatorio = async function() {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setConselho(data.slip.advice);  
        setSlipId(data.slip.id)
    }
    
    useEffect(() => {
        buscaConselhoAleatorio();
    }, []);
    return (
        <div className="w-xs min-h-[320px] flex flex-col gap-4  items-center bg-[var(--Dark-Grayish-Blue)] box-border p-[20px] rounded-sm relative">
            <h3 className="text-[var(--Neon-Green)] tracking-[0.2em] text-[10px] text-center mt-5">ADVICE #{slipId}</h3>
            <p className="text-[var(--Light-Cyan)] text-center ">
                {conselho}
            </p>

            <img src={PatternDivider} alt="" className="mb-[30px]"/>
            
            <button 
                className="w-[50px] h-[50px] bg-[var(--Neon-Green)] absolute bottom-[-25px] rounded-full flex items-center justify-center cursor-pointer shadow-lg" 
                onClick={buscaConselhoAleatorio}>
                <img src={IconDice} alt="Icon Dice" className="w-[50%] h-[50%]" />
            </button>
        </div>
    );
}
