let records = [];

const addRecord = (record) => {
    records.push(record);
}

const removeRecord = (id) => {
    records = records.filter(record => record.id !== id);
}

export { records, addRecord, removeRecord }