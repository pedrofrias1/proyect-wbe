import { createElement } from "react";
import CardFaqs from "./cardFaqs";

function Faqs() {

    

    return (

        <section className="pt-12 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-100" id="FAQS">
            <h2 className="bg-red-400 p-5 text-center text-3xl font-semibold font-serif">FAQS</h2>
            <div className="p-4 bg-gray-200 rounded-lg flex flex-column justify-around m-5 ">
                <CardFaqs pregunta={'COMO PUEDO SOLICITAR UNA COTIZACION ?'} respuesta={`Podra solicitar una cotizacion enviando un email en el formulario de contacto que se encuentra al final de la página.`}/>
                <CardFaqs pregunta={'CUALES SON LOS METODOS DE PAGO ?'} respuesta={'Disponemos de diferentes metodos de pago, podra abonar con tarjeta de credito o debito a traves de mercado pago u transferencia.'}/>
                <CardFaqs pregunta={'COMO SE ENTREGA LA WEB ?'}  respuesta={'Entregamos el proyecto ya subido a un hosting con su respectivo dominio, acordado con anteriormente con el cliente. Tambien se entregan todos los archivos y codigo fuente de la página.'}/>
            </div> 
        </section>

    )
}
export default Faqs;