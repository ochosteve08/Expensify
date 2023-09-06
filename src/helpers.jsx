export const FetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const DeleteUser = ({ key }) => {
  return localStorage.removeItem(key);
};

const generateRandomColor = () => {
  const existingBudgetLength = FetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

export const CreateBudget = ({ name, amount }) => {

  const newItem = {
    name: name,
    amount: +amount,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    color: generateRandomColor(),
  };

  const existingBudgets = FetchData("budgets") ?? [];

  const updatedBudgets = [newItem, ...existingBudgets];

  localStorage.setItem("budgets", JSON.stringify(updatedBudgets));

  return updatedBudgets;
};

export const CreateExpense = ({ name, amount, budgetId }) => {
    console.log({ name, amount, budgetId });
  const newItem = {
    name: name,
    amount: +amount,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    budgetId: budgetId,
  };

  const existingExpenses = FetchData("expenses") ?? [];

  const updatedExpenses = [newItem, ...existingExpenses];

  localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

  return updatedExpenses;
};

const MIN_DELAY = 1000; // 1 second, for example
export const AddBudgetDelay = () =>
  new Promise((res) => setTimeout(res, MIN_DELAY + Math.random() * 1000));

export const FormatCurrency = (amount) => {
  return amount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });
};

export const CalculateSpentByBudget = (budgetId) => {
  const expenses = FetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    if (expense.budgetId !== budgetId) return acc;
    return (acc += expense.amount);
  }, 0);

  return budgetSpent;
};


export const FormatPercentage = (amount )=> {
  return amount.toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 0
  })
}