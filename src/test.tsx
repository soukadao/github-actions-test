export default function TestPage() {
  const items: Array<{ id: number, body: string }> = [
    { id: 1, body: "🍞" },
    { id: 2, body: "🍚" },
    { id: 3, body: "🍫" },
    { id: 4, body: "🐸" },
    { id: 5, body: "🐓" },
  ];
  return (
    <>
      {items.map(item => (
        <div key={1}>
          <p>body: {item.body}</p>
        </div>
      ))}
    </>
  );
}
