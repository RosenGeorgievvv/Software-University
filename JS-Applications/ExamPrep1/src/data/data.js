import { del, get, post, put } from './api.js';

const host = 'http://localhost:3030';

const endpoints = {
    events: '/data/events',
    allEvents: '/data/events?sortBy=_createdOn%20desc',
    eventsById: (id) => `/data/events/${id}`,
    going: '/data/going',
    eventTotalGoing: (eventId) => `/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`,
    eventTotalGoingByUser: (eventId, userId) =>
        `/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAllEvents() {
    return await get(host + endpoints.allEvents);
}

export async function getEventById(eventId) {
    return await get(host + endpoints.eventsById(eventId));
}

export async function createEvent(data) {
    return await post(host + endpoints.events, data);
}

export async function editEvent(eventId, data) {
    return await put(host + endpoints.eventsById(eventId), data);
}

export async function deleteEvent(eventId) {
    return await del(host + endpoints.eventsById(eventId));
}

export async function goToEvent(eventId, data) {
    return post(host + endpoints.going, data);
}

export async function getAllGoingCountToEvent(eventId) {
    return await get(host + endpoints.eventTotalGoing(eventId));
}

export async function hasUserGoneToEvent(eventId, userId) {
    //return either 0 if user has not gone
    //or 1 if user has already gone
    const result = await get(host + endpoints.eventTotalGoingByUser(eventId, userId));
    return Boolean(result);
}
