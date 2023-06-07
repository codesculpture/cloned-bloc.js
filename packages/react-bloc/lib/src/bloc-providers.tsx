import { Component, createContext } from "react";
import { ContextStore } from "./contextStore";

class BlocProvider extends Component {
    constructor({create}) {
        // createContext
        const newContext = createContext(null);
        ContextStore.set("123", newContext);
        super({});
    }
}