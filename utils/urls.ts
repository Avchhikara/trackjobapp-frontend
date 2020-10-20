export const BASE_URL: string = process.env.NODE_ENV !== "production" ? "http://localhost:8080": "https://trackjobapp-backend.herokuapp.com";
export const ENTRIES_URL: string = `${BASE_URL}/entries`;
export const CREATE_ENTRY_URL: string = `${BASE_URL}/add`;
export const LOGIN_URL: string = `${BASE_URL}/login`;
export const REGISTER_URL: string = `${BASE_URL}/register`;