const monthsOfYear = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
}
       
const years = [...document.querySelectorAll('.monthCalendar')].reduce((a, c) => {
    a[c.id] = c;
    return a;
}, {});

const months = [...document.querySelectorAll('.daysCalendar')].reduce((a, c) => {
    a[c.id] = c;
    return a;
}, {});

const calendar = document.getElementById('years');
const body = document.querySelector('body');
update(calendar);

calendar.addEventListener('click', (e) => {
    if (e.target.classList.contains('date') || e.target.classList.contains('day')) {
        e.stopImmediatePropagation();
        const yearId = `year-${e.target.textContent.trim()}`;
        update(years[yearId]);
    }
})

body.addEventListener('click', (e) => {
    if (e.target.tagName == 'CAPTION') {
        const secId = e.target.parentNode.parentNode.id;
        if (secId.includes('year-')) {
            update(calendar);
        } else if (secId.includes('month-')) {
            const yearId = `year-${secId.split('-')[1]}`;
            update(years[yearId]);
        }
    } else if (e.target.tagName == 'DIV' || e.target.tagName == 'TD') {
        const month = e.target.textContent.trim();

        if (monthsOfYear.hasOwnProperty(month)) {
            console.log(e.target.parentNode);
            let parent = e.target.parentNode
            while (parent.tagName != 'TABLE') {
                parent = parent.parentNode;
            }
            const year = parent.querySelector('caption').textContent.trim();
                const yearId = `month-${year}-${monthsOfYear[month]}`;
                update(months[yearId]);
        }
    }
});

function update(sec) {
    body.innerHTML = '';
    body.append(sec);
}
console.log(Object.keys(months), Object.values(months));