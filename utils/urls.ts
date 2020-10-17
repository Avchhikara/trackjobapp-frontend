export const BASE_URL = process.env.NODE_ENV !== "production" ? "http://localhost:8080": "https://trackjobapp.herokuapp.com";
export const ENTRIES_URL = `${BASE_URL}/entries`;
export const CREATE_ENTRY_URL = `${BASE_URL}/create`