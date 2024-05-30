export class Record {
    #id;
    type;
    sum;
    title;
    date;

    static recordsList = [];

    constructor(title, sum, date) {
        this.title = title;
        this.sum = sum;
        this.date = new Date(date).toLocaleDateString();

        Record.recordsList.push(this);
        this.#id = Record.recordsList.length;
    }

    getInfo = () => {
        return `${this.constructor.name}: ${this.title}, ${this.sum}, ${this.date}`;
    }

    removeRecord = () => {
        Record.recordsList = Record.recordsList.filter(record => record.id !== this.#id);
    }
}