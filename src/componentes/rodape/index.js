import './style.css';

export default function Footer ({tema}) {
    return(
        <footer className={tema === "claro" ? "claro" : "escuro"}>
            <div id='rodape'>
                <div id='logo'></div>
                <p className={tema === "claro" ? "rodapeClaro" : "rodapeEscuro"} id='fazemos'>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                ferramentas e tecnologias personalizadas</p>
                <div id='imagens'>
                    <img src="assets/facebook.png" alt="facebook" />
                    <img src="assets/twitter.png" alt="Twitter" />
                    <img src="assets/linkedin.png" alt="LinkedIn" />
                    <img src="assets/dribble.png" alt="Dribble" />
                    <img src="assets/behance.png" alt="Behance" />
                    <img src="assets/google-plus.png" alt="Google-plus" />
                </div>
                <p className={tema === "claro" ? "rodapeClaro" : "rodapeEscuro"}>@ Copyright 2023 <span id='autor'>Cozacs</span></p>
            </div>
        </footer>
    );
}