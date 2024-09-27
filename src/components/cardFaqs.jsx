import { useState } from "react";

function CardFaqs({pregunta, respuesta}) {
    const [acordationOpen, setAcordationOpen] = useState(false);

    return (
        <div className="py-2">
            <button onClick={()=>setAcordationOpen(!acordationOpen)} className="flex justify-between w-full">
                <span>{pregunta} </span>
                {   acordationOpen 
                    ? <i class="bi bi-caret-up-fill text-3xl"></i>
                    :<i class="bi bi-caret-down-fill text-3xl"></i> 
                }  
            </button>

            <div className={
                `grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm 
                ${ acordationOpen 
                ? "grid-rows-[1fr] opacity-100" 
                : "grid-rows-[0fr] opacity-0"} 
                `}>
                <div className="overflow-hidden">{respuesta}</div>
            </div>
        </div>
    )
}
export default CardFaqs;