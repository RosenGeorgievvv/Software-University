//Task: Write a function that calculates the area and the volume of a figure, which is defined by its coordinates (x, y, z).

//Solution:

function solve(area, vol, input) {
    const figures = JSON.parse(input);

    const result = figures.map(figure => {
        const x = Number(figure.x);
        const y = Number(figure.y);
        const z = Number(figure.z);

        return {
            area: area.apply({ x, y, z }),
            volume: vol.apply({ x, y, z })
        };
    });





    return result;
}