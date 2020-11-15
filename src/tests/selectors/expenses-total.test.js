import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const expenses = []
    const result = getExpensesTotal(expenses)
    expect(result).toBe(0)
})

test('should correctly add up a single amount', () => {
    const result = getExpensesTotal([expenses[0]])
    expect(result).toBe(195)
})

test('should correctly add up multiple amounts', () => {
    const result = getExpensesTotal(expenses)
    expect(result).toBe(114195)
})