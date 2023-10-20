import './style.css';

export default function Banner ({tema}) {
    return(
        <section id="banner">
            <div className={tema === "claro" ? "claro" : "escuro"} id="foto"></div>
            <div id="texto">
                <p id="sub-titulo-banner">BRANDING / UI / UX / TECNOLOGIA</p>
                <h1 id="titulo-banner">Agência de Branding</h1>
                <p id="span-banner"><span>e design digital</span></p>
            </div>
        </section>
    );
}