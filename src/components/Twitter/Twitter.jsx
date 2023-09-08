import api from "../../api"


const Twitter = () => {


  const connectToTwitter = async () => {

    const getRequestToken = await api.get("/get-twitter-request-token")
    console.log(getRequestToken)

  }



  return(
    <div onClick={connectToTwitter}>Connect Twitter</div>
  )
}

export default Twitter