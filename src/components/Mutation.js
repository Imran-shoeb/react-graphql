import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

//for mutaion 


// const chatMutation = gql`
// mutation {
//     postMessage(channelId: "1", text: "asdasd", userId: "Sam"){
//       messageId
//       text
//       datetime
//       userId
//     }
//   }
// `;




function Mutation() {


// getting CORS errors here whenever I try to mutate data

 //const { loading, error, data } = useQuery(chatMutation);

  // const returnedData = data.chatMutation.map((res) => {
  //     return res;
  //   })


}

export default Mutation;