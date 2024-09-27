import imgProjects from "../assets/projects.png"

function Header() {
    return (
        <header className="pt-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-100">
            <section className="flex justify-around align-center max-[640px]:flex-col max-[640px]:justify-center">
                <div className="header-div-frias text-center card-scroller">
                    <h1 className="font-serif text-7xl">FRIAS WEB</h1>
                    <p className="font-serif text-4xl">E-COMMERCE PAGINAS WEB DISEÑO</p>
                    <div className="hedaer-div-frias-social flex justify-evenly">
                        <i class="bi bi-instagram icons-social text-6xl"></i>
                        <i class="bi bi-whatsapp icons-social text-6xl"></i>
                    </div>
                </div>
                {/* muestras de diseños */}
                <div className="">
                    <img src={imgProjects} alt="projectos-web" className="img-projects" />
                </div>
            </section>


        </header>
    )
}
export default Header;