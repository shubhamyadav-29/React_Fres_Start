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
  ];
  return (
    <div>
      <h1>Loop in JSX with Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Dummy Data</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Shubham</td>
            <td>Shubham@test.com</td>
            <td>21</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Shubham</td>
            <td>Shubham@test.com</td>
            <td>21</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Shubham</td>
            <td>Shubham@test.com</td>
            <td>21</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Shubham</td>
            <td>Shubham@test.com</td>
            <td>21</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Shubham</td>
            <td>Shubham@test.com</td>
            <td>21</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default App;
