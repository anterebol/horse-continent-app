import { createUrl } from '../utils/createUrl';
export const URL = 'https://horse-continent.herokuapp.com';
// export const URL = 'http://localhost:4000';
export const reviewPoint = 'review';
export const reviewUrl = createUrl(URL, reviewPoint);
export const eventPoint = 'event';
export const eventUrl = createUrl(URL, eventPoint);
