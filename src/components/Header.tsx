import "../styles/App.css";

export default function Header(props: { text: string }) {
    return <header>
        {props.text}
    </header>
}
