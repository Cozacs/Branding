import './style.css';

export default function Experiencia({tema}) {
    return(
        <section className={tema === "claro" ? "sol" : "lua"} id='exp'>
            <h2 id='tituloExp'>Experiências De Trabalho</h2>
            <div id="barraAmarela"></div>
            <p id='mercado'>
                Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
            </p>
            <div id='secaoCard'>
                <div className={`card ${tema === "claro" ? "sol" : "lua"}`}>
                    <p>JUNHO 2012 - 2016</p>
                    <h2>Web Designer</h2>
                    <p>Pied Piper StartUp.</p>
                    <p>Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores</p>
                </div>
                <div className={`card ${tema === "claro" ? "sol" : "lua"}`}>
                    <p>AGOSTO 2016 - 2019</p>
                    <h2>Product Designer</h2>
                    <p>E Corp.</p>
                    <p>Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra</p>
                </div>
                <div className={`card ${tema === "claro" ? "sol" : "lua"}`}>
                    <p>FEVEREIRO 2019 - 2021</p>
                    <h2>Digital Consulting</h2>
                    <p>Arasaka Inc.</p>
                    <p>Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução</p>
                </div>
            </div>
        </section>
    );
}