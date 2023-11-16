function solve(input){

    let pattern = /(?<day>\d{2})([\.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let match = pattern.exec(input);

    while(match !== null){
        let day = match.groups.day;
        let month = match.groups.month;
        let year = match.groups.year;

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        match = pattern.exec(input);
    }
}
solve("13/Jul/1928", "10-Nov-1934", "25.Dec.1937")