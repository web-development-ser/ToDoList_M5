import TodoItem from "../TodoItem";

const TableBody = ({ items }) => {
  return (
    <tbody>
      {items.map((todoItem) => (
        <TodoItem key={todoItem.produto} todoItem={todoItem} />
      ))}
    </tbody>
  );
};

export default TableBody;
