import './style.css';

export default function Header ({ tema, alterar }) {
    return(
        <header className={tema}>
            <div id="logo"></div>
            <button onClick={alterar} className={tema} id={tema  === "claro" ? "claro" : "escuro"}>
                <div id={tema === "claro" ? "sol" : "lua"}></div>
            </button>
        </header>
    );
}