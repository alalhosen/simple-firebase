const Login = () => {
  const handleGoogleSignIn = () => {
    console.log("google coming soon");
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
    </div>
  );
};

export default Login;
