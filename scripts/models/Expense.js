import { Record } from "./Record.js";

export class Expense extends Record {
    constructor(title, sum, date) {
        super(title, sum, date);
        this.type = 'expense';
    }

    getInfo = () => {
        return `${this.title}  |  ${-this.sum}  |  ${this.date}`;
    }
}