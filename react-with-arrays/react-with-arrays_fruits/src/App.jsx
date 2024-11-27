import Card from "./components/Card";

export default function App() {
  function ListOfFruits() {
    const fruits = [
      { id: 1337, name: "🍌 Banana", color: "yellow" },
      { id: 1338, name: "🍎 Apple", color: "red" },
      { id: 1339, name: "🍓 Strawberry", color: "pink" },
      { id: 1340, name: "🥝 Kiwi", color: "brown" },
      { id: 1341, name: "🍋 Lemon", color: "yellow" },
    ];

    return (
      <div className="app">
        <ul>
          {fruits.map(({ id, name }) => (
            <li key={id}>
              <Card name={name} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <ListOfFruits />;
}
