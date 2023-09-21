import api from "../../api"
import { useEffect } from "react"

const Twitter = () => {

  useEffect(()=>{


    const urlParams = new URLSearchParams(window.location.search);
     const oauthTokenParam = urlParams.get("oauth_token");
     const oauthVerifierParam = urlParams.get("oauth_verifier");

    // const oauthTokenParam = "john snow"
    // const oauthVerifierParam = 'bad boy z'
    // console.log("hi")

    const sendTokenAndVerifier = async () => {

      // console.log("second")
        try {
          const sentTokenAndVerifier = await api.post("/send-twitter-token-and-verifier", {oauthTokenParam, oauthVerifierParam})

          console.log(sentTokenAndVerifier);

          if(sentTokenAndVerifier){
            window.location.replace = "http://localhost:5173/";

          }
          
        } catch (error) {
          console.log(error);
          
        }

    }


     if(oauthTokenParam && oauthVerifierParam){
      sendTokenAndVerifier();
     }


  }, [])


  const connectToTwitter = async () => {

    const getRequestToken = await api.get("/get-twitter-request-token")
    console.log(getRequestToken);
    if(getRequestToken){
      let oauth_token = getRequestToken.data.serverData.oauth_token;
      window.location.replace(`https://api.twitter.com/oauth/authorize?oauth_token=${oauth_token}`);


    }

  }



  return(
    <div onClick={connectToTwitter}>Connect Twitter</div>
  )
}

export default Twitter

