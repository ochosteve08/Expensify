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
  console.log(name, amount);
  const newItem = {
    name: name,
    amount: +amount,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    color: generateRandomColor(),
  };
  console.log(newItem);
  const existingBudgets = FetchData("budgets") ?? [];

  const updatedBudgets = [newItem, ...existingBudgets];

  localStorage.setItem("budgets", JSON.stringify(updatedBudgets));

  return updatedBudgets;
};
