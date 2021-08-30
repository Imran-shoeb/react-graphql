import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

//for more message demo query


// const chatMutation = gql`
// {
//     fetchMoreMessages(channelId : "1",
//       messageId : "2978623855697937841", old : true){
//       messageId
//       text
//       datetime
//       userId
//     }
          
//   }
// `;




function Moremessage() {


// getting CORS errors here whenever I try to mutate data

 //const { loading, error, data } = useQuery(fetchMoreMessages);

  // const moreMessages = data.fetchMoreMessages.map((res) => {
  //     return res;
  //   })


}

export default Moremessage;