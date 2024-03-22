import { deleteEvent, getAllGoingCountToEvent, getEventById, goToEvent, hasUserGoneToEvent } from '../data/data.js';
import { html } from '../lib/lib.js';
import { getUserData } from '../utils/userHelper.js';

const detailsTemplate = (event, onDelete, onGo) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${event.imageUrl} alt="example1" />
            <p id="details-title">${event.name}</p>
            <p id="details-category">Category: <span id="categories">${event.category}</span></p>
            <p id="details-date">Date:<span id="date">${event.date}</span></p>
            <div id="info-wrapper">
                <div id="details-description">
                    <span>${event.description}</span>
                </div>
            </div>

            <h3>Going: <span id="go">${event.goingCount}</span> times.</h3>

            ${event.canEdit
                ? html` <div id="action-buttons">
                      <a href="/details/${event._id}/edit" id="edit-btn">Edit</a>
                      <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                  </div>`
                : null}
            ${event.canGo
                ? html`<div id="action-buttons"><a @click=${onGo} href="javascript:void(0)" id="go-btn">Going</a></div>`
                : null}
        </div>
    </section>
`;

export async function showDetailsPage(ctx) {
    const id = ctx.params.id;

    const event = await getEventById(id);

    const userData = getUserData();

    const isAuthor = userData?._id === event._ownerId;
    const hasGone = await hasUserGoneToEvent(event._id, userData?._id);
    const goingCount = await getAllGoingCountToEvent(id);

    event.canEdit = isAuthor;
    event.canGo = userData && !isAuthor && !hasGone;
    event.goingCount = goingCount;

    update();

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this event?');

        if (choice) {
            await deleteEvent(id);
            ctx.goTo('/dashboard');
        }
    }

    async function onGo() {
        await goToEvent(id, { eventId: id });
        event.canGo = false;
        event.goingCount++;
        update();
    }

    function update() {
        ctx.render(detailsTemplate(event, onDelete, onGo));
    }
}
