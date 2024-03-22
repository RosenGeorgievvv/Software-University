import { getAllEvents } from '../data/data.js';
import { html } from '../lib/lib.js';

const dashboardTemplate = (events) => html`
    <h2>Current Events</h2>
    ${events.length > 0 ? html` <section id="dashboard">${events.map(eventTemplate)}</section>` : html` <h4>No Events yet.</h4>`}
`;

const eventTemplate = (event) => html`
    <div class="event">
        <img src=${event.imageUrl} alt="example1" />
        <p class="title">${event.name}</p>
        <p class="date">${event.date}</p>
        <a class="details-btn" href="/details/${event._id}">Details</a>
    </div>
`;

export async function showDashboardPage(ctx) {
    const events = await getAllEvents();

    ctx.render(dashboardTemplate(events));
}
