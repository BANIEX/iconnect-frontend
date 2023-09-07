import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";

import "./App.css";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import Twitter from "./components/Twitter/Twitter";

function App() {

  const clientId =
    "";

  return (
    <>
      <div>
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwt_decode(credentialResponse.credential);
              console.log(decoded);
              axios
                .post(`http://localhost:9000/google-sign-in`, decoded)
                .then((res) => {
                  console.log(res);
                  console.log(res.data);
                });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
        <ImageUpload/>
        <Twitter/>
        
      </div>
    </>
  );
}

export default App;
