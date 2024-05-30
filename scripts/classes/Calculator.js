export class Calculator {
    static incomes(records) {
        return records.filter(record => record.type === 'income')
            .reduce((acc, record) => acc + record.sum, 0);
    }

    static expenses(records) {
        return records.filter(record => record.type === 'expense')
            .reduce((acc, record) => acc - record.sum, 0);
    }

    static balance(records) {
        return Calculator.incomes(records) - Calculator.expenses(records);
    }
}