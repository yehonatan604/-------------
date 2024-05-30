import { Income } from '../models/Income.js';
import { Expense } from '../models/Expense.js';

// Factory function to create a record
export const createRecord = (title, sum, type, date) => {
    switch (type) {
        case 'income':
            return new Income(title, sum, date);
        case 'expense':
            return new Expense(title, sum, date);
    }
}