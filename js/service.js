import { handleErrors } from "./exceptions.js";

var URL = 'http://localhost:3000/gatos';

export const getAllGatos = async () => {
    try {
        const response = await fetch(URL);
        handleErrors(response);
        return response.json();
    } catch (error) {
        console.log('Error >>>', error);
    }
};