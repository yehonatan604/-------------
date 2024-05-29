import { Record } from "./Record.js";

export class Income extends Record {
    constructor(title, sum) {
        super(title, sum);
        this.type = 'income';
    }

    getInfo = () => {
        return `${this.title}: ${this.sum}₪`;
    }
}