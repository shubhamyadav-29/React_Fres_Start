function User({user}) {
  return <div style={{border:'1px solid green',padding:'10px',margin:'10px',width:'400px',borderRadius:'10px'}}>
    
    <h3 >Name: <span style={{color:'red'}}>{user.name}</span></h3>
    <h3 >Age: <span style={{color:'green'}}>{user.age}</span></h3>
    <h3 >Email: <span style={{color:'yellow'}}>{user.email}</span></h3>
    <h3 >Id: <span style={{color:'blue'}}>{user.id}</span></h3>
  </div>;
}

export default User;
