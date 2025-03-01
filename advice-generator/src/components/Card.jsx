import PatternDivider from "../assets/images/pattern-divider-mobile.svg";
import IconDice from "../assets/images/icon-dice.svg";

export function Card() {
    return (
        <div className="w-xs min-h-[320px] flex flex-col gap-4  items-center bg-[var(--Dark-Grayish-Blue)] box-border p-[20px] rounded-sm relative">
            <h3 className="text-[var(--Neon-Green)] tracking-[0.2em] text-[10px] text-center mt-5">ADVICE #117</h3>
            <p className="text-[var(--Light-Cyan)] text-center ">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repudiandae vel alias facere harum non suscipit ullam! Blanditiis"
            </p>
            <img src={PatternDivider} alt="" className="mb-[30px]"/>
            
            <div className="w-[50px] h-[50px] bg-[var(--Neon-Green)] absolute bottom-[-25px]  rounded-full flex items-center justify-center cursor-pointer shadow-lg">
            <img src={IconDice} alt="Icon Dice" className="w-[50%] h-[50%]" />
            </div>
        </div>
       
    );
}
