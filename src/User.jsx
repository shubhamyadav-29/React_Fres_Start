function User({ user, user2 }) {
  return (
    <div>
      <hr />

      <h1>Name:{user.name}</h1>
      <h1>Age:{user.age}</h1>
      <h1>Email:{user.email}</h1>
    </div>
  );
}

export default User;
