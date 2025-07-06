export const Dashboard = () => {

    return (
      <div style={{ border: "5px solid green", padding: "2rem", fontFamily: "sans-serif" }}>
        {/* <h1>Consuming Context</h1> */}
        {user ? (
          <>
            <h1>Hello, {user.name}</h1>
            <button onClick={logout}>logout</button>
          </>
        ) : (
          <>
            <h1>You are not logged in......</h1>
            <button onClick={login}>login</button>
          </>
        )}
      </div>
    );
  };
  