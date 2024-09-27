function Footer() {
    return (
        <footer className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-red-400 p-10">
            <div className="flex align-center justify-between">

            
            <div className="flex flex-col align-center justify-center">
                <a href="#SobreNosotros" className="hover:bg-gray-300 hover:text-black rounded-md px-3 py-2 text-base font-medium">SOBRE NOSOTROS</a>
                <a href="#ComoTrabajamos" className="hover:bg-gray-300 hover:text-black rounded-md px-3 py-2 text-base font-medium">COMO TRABAJAMOS</a>
                <a href="#FAQS" className="hover:bg-gray-300 hover:text-black rounded-md px-3 py-2 text-base font-medium">FAQS</a>
                <a href="#Contacto"  className="hover:bg-gray-300 hover:text-black rounded-md px-3 py-2 text-base font-medium">CONTACTO</a>
            </div>
          
            
            <div className="flex flex-col align-center justify-center text-center">
                <h3>FRIAS WEB</h3>
                <h4>E-COMMERCE PAGINAS WEB DISEÑO</h4>
                <div className="flex justify-around align-center pt-5">
                <i class="bi bi-instagram icons-social text-4xl"></i>
                <i class="bi bi-whatsapp icons-social text-4xl"></i>
                </div>

            </div>
            </div>
        </footer>
    )
}
export default Footer