class Calculator {
    constructor(input, output) {
        this.input = input;
        this.output = output;
    }

    getInputData() {
        const inputCommand = document.getElementById('js').value;
        document.querySelector('.value__command').innerHTML += `${inputCommand} \n `;
    }

    showInputData() {
        const valueCommand = document.getElementById('js').value;
        document.getElementById('res').innerHTML += `${valueCommand}`;
    }


}


let btn = document.getElementById("run");

const calculator = new Calculator();

btn.addEventListener('click', () => {
    function prepare(content) {
        return "document.write('" +
            content
                .replace(/[\\']/g, "\\$&").replace(/\n/g, "\\n").replace(/<\/script/g, "<\\/script")
                .replace(/%/g, "%25").replace(/#/g, "%23") +
            "');";
    }

    document.getElementById("res").src = "data:text/html,<!doctype html><title>Demo</title><script>" +
        prepare("<script>" + document.getElementById("js").value + "<\/script>") +
        "<\/script>";

    calculator.getInputData();
    calculator.showInputData();


});

