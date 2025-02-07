import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };

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
  <button onClick={handleGoogleSignIn}>Login with Google</button>
}

      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>email:{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
