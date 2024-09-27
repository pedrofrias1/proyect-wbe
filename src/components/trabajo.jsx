import CardTrabajo from "./cardTrabajo";

function Trabajo(){

   
    
    return(
        <section className="pt-12 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-100" id="ComoTrabajamos">
            <h2 className="bg-red-400 p-5 text-center text-3xl font-semibold font-serif">COMO TRABAJAMOS</h2>
            <div className="card-trabajo-grid m-5 max-[1185px]:flex max-[1185px]:flex-col max-[1185px]:justify-center max-[1185px]:items-center">
                <CardTrabajo title={'FORMULARIO'} text={'Se le solicitara al cliente completar un formulario en el cual va a dar diferentes detalles acerca de la web que requiere como por ejemplo: funcionalidades , gustos esteticos , webs de referencia ,etc.'} icon={'bi bi-filter-square'}  data={'fade-right'}/>
                <CardTrabajo title={'DISEÑO'} text={'En esta etapa el equipo de diseño se encargara de hacer el primer diseño de la WEB en la herramienta figma para presentarselo al cliente y hacer los cambios correspondientes.'} icon={'bi bi-brush-fill'} data={'fade-left'} />
                <CardTrabajo title={'POSICIONAMIENTO'} text={'FRIASWEB se enfoca no solo en realizar la campaña, asi también realizar informes, estudiar la competencia y revisar semana tras semana  la competencia.'} icon={'bi bi-bar-chart-line-fill'} data={'fade-right'}/>
                <CardTrabajo title={'Despliegue y Entrega'} text={'Es la etapa final en la cual se hara el despligue de la web en un Hosting (con el dominio anteriormente aprobado por el cliente) y se le hara entrega de todo el codigo fuente.'} icon={'bi bi-database-fill-up'} data={'fade-left'} />
            </div>
        </section>
    )
}
export default Trabajo;