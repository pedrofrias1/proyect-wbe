import { Fragment } from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import About from "./components/about";
import Faqs from "./components/faqs";
import Trabajo from "./components/trabajo";
import Contacto from "./components/contacto";
import Footer from "./components/footer";

function Home(){
    return(
        <Fragment>
            <Nav/>
            <Header/>
            <main>
                <About/>
                <Faqs/>
                <Trabajo/>
                <Contacto/>
            </main>
            <Footer/>
        </Fragment>
    )
}
export default Home;