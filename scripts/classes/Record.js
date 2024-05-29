export class Record {
    id;
    type;
    sum;
    title;
    date;

    static #count = 0;

    constructor(title, sum, date) {
        this.title = title;
        this.sum = sum;
        this.date = date;

        Record.#count++;
        this.id = Record.#count;
    }

    getInfo = () => {
        return `Method getInfo() is not implemented in ${this.constructor.name} class`;
    }
}