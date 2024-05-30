export class Record {
    id;
    type;
    sum;
    title;
    date;

    static recordsList = [];

    constructor(title, sum, date) {
        this.title = title;
        this.sum = sum;
        this.date = date;

        Record.recordsList.push(this);
        this.id = Record.recordsList.length;
    }

    getInfo = () => {
        return `Method getInfo() is not implemented in ${this.constructor.name} class`;
    }

    removeRecord = () => {
        Record.recordsList = Record.recordsList.filter(record => record.id !== this.id);
    }
}