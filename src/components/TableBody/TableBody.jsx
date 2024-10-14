import TodoItem from "../TodoItem/TodoItem";

const TableBody = ({ items, deleteProduct }) => {
  return (
    <tbody>
      {items.map((todoItem, index) => (
        <TodoItem
          deleteProduct={() => deleteProduct(index)}
          key={todoItem.produto}
          todoItem={todoItem}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
