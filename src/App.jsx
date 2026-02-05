import Login, {Profile,Setting, Userkey}  from "./UserComponent";

function App() {
  return (
    <>
      <h1>Importing and exporting Component</h1>
      <Login/>
      <Profile/>
      <Setting/>
      <h1>{Userkey}</h1>
    </>

  );
}

export default App;
