function attachEventsListeners() {

    const btns = Array.from(document.querySelectorAll("input[type='button']"));

    for (let btn of btns) {
        btn.addEventListener('click', convertHandler);
    }

    function convertHandler(e) {
        let currentInput = e.currentTarget.parentElement.children[1];
        let value = Number(currentInput.value);
        let unit = currentInput.id;

        switch (unit) {
            case "days": propNewValue(value); break;
            case "hours": propNewValue(value / 24); break;
            case "minutes": propNewValue(value / 24 / 60); break;
            case "seconds": propNewValue(value / 24 / 60 / 60); break;
        }
    }

    function propNewValue(value){
        let inputs = document.querySelectorAll("input[type='text']");
        inputs[0].value = value;
        inputs[1].value = value * 24;
        inputs[2].value = value * 24 * 60;
        inputs[3].value = value * 24 * 60 * 60;
    }
}