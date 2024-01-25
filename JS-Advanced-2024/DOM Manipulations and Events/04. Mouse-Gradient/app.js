function attachGradientEvents() {

    let gradientElement = document.getElementById('gradient');

    gradientElement.addEventListener('mousemove', move);
    gradientElement.addEventListener('mouseout', out);

    function move(e){
        let width = e.target.clientWidth;
        let position = e.offsetX / ( width - 1);
        let percent = Math.trunc(position * 100);
        document.getElementById('result').textContent = percent + "%";
    }

    
}