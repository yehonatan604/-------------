import { Record } from "./Record.js";

export class Expense extends Record {
    constructor(title, sum) {
        super(title, sum);
        this.type = 'expense';
    }

    getInfo = () => {
        return `${this.title}: ${-this.sum}₪`;
    }
}