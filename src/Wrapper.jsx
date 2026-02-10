function Wrapper({children}) {
  return (
    <div style={{color:"red", border:"5px solid green" , width:"10rem"}}>
      {children}
    </div>
  );
}

export default Wrapper;
