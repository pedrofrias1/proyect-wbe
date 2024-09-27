import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function CardTrabajo({title,text,data,icon}) {

  

    useEffect(() => {
        Aos.init()
    })

    return (
        <div>
            <div className="card-trabajo-card text-center px-5 max-[510px]:w-[290px] max-[510px]:h-[300px] " data-aos={data} data-aos-duration="1500">

                <div className="title flex justify-center align-center gap-2">
                    <h4 className="text-xl font-semibold font-serif">{title} </h4>
                    <i class={icon}></i>
                </div>

                <p>{text}</p>
            </div>




        </div>
    )
}
export default CardTrabajo;
