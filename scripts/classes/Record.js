export class Record {
    id;
    type;
    sum;
    title;

    static #count = 0;

    constructor(title, sum) {
        this.title = title;
        this.sum = sum;

        Record.#count++;
        this.id = Record.#count;
    }

    getInfo = () => {
        return `Method getInfo() is not implemented in ${this.constructor.name} class`;
    }
}