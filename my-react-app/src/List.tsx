interface Item {
  id: number;
  name: string;
  calories: number;
}

interface ListProps {
  items: Item[];
  category: string;
}

const List: React.FC<ListProps> = (props) => {
  const category = props.category;
  const itemList = props.items;

  //for every fruit, print that fruit in a list item:
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name} : &nbsp; <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
};

List.defaultProps = {
    category: "Category",
    items: []
}

export default List;
