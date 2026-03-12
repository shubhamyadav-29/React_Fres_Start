import User from "./User";

function App() {
  const userName = ["Shubham", "Anil", "Rajat"];
  const userData = [
    {
      name: "Anil",
      age: "29",
      email: "anil@test.com",
      id: 1,
    },
    {
      name: "shubham",
      age: "21",
      email: "shubham@test.com",
      id: 2,
    },
    {
      name: "Rajat",
      age: "21",
      email: "peter@test.com",
      id: 3,
    },
      {
      name: "Raj",
      age: "21",
      email: "peter@test.com",
      id: 4,
    },
  ];
  return (
    <div>
      <h1>Reuse Component in Loop</h1>
      {userData.map((user) => (
        <div key={user.id} >
          <User data={user}/>
        </div>
      ))}
    </div>
  );
}
export default App;
