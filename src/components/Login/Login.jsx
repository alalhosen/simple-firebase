import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };

const handleGithubSignIn=()=>{
  signInWithPopup(auth, GithubProvider)
}

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out done");
        setUser(null)
      })
      .catch((error) => console.log(error));
  };

//  if user exists ? signout : sign in

  return (
    <div>
      {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}

{
  user ?   <button onClick={handleSignOut}>Sign Out</button>
  :
  <>
    <button onClick={handleGoogleSignIn}>Login with Google</button>
    <button onClick={handleGithubSignIn}>Login With Google</button>
  </>
}

      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>email:{user.email}</p>
         <p>providerId: {user.providerId}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
