import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import auth from "../../firebase/firebase.init";

const Login = () => {

const provider=new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth)
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
    </div>
  );
};

export default Login;
