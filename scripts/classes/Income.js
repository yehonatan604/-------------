import { Record } from "./Record.js";

export class Income extends Record {
    constructor(title, sum, date) {
        super(title, sum, date);
        this.type = 'income';
    }

    getInfo = () => {
        return `${this.id} | ${this.title} | ${this.sum}₪ | ${this.date}`;
    }
}