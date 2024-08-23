import { render } from "react-dom";
import { Counter } from "./components/Counter";

render(
    <div style={{
        display: "flex",
        width: '100%',
        height: "100vh",
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Counter/>
    </div>,
    document.getElementById("root")
)