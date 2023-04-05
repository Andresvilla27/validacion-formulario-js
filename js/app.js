import { valida } from "./validaciones";

const inputs = document.querySelector("input");

inputs.forEach((input) => {
    input.addEvenListener("blur", (input) =>{
        valida(input.target)
    });
});