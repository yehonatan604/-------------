import { Income } from '../classes/Income.js';
import { Expense } from '../classes/Expense.js';

export const createRecord = (title, sum, type, date) => {
    switch (type) {
        case 'income':
            return new Income(title, sum, date);
        case 'expense':
            return new Expense(title, sum, date);
    }
}