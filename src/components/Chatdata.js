import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { format } from "date-fns";

import mockLatestMessage from "../mockData/latestMessage.json";
import { useEffect, useState } from 'react';

// cannot fetch data from graphQl. that's why taking the mock data to test the behavior of the code
console.log(mockLatestMessage);

// querying data from graphQl

// const getLatestMessageQuery = gql`
//   {
//     fetchLatestMessages(channelId: "1") {
//       messageId
//       text
//       datetime
//       userId
//     }
//   }
// `;


function Chatdata(props) {

// getting CORS errors here whenever I try to query data

  //const { loading, error, data } = useQuery(getLatestMessageQuery);

  // const fetchedData = data.fetchLatestMessages.map((res) => {
  //     return res;
  //   })
  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error :(</p>;

  return (
      <>
    {mockLatestMessage.data.fetchLatestMessages.map(
        (data) => {
          return (
              //tried to put key to the div to make it unique so the child component will re-render.

            <div key={props.data}> 
              {(() => {
                if (data.userId === props.data) {
                  return (
                    <li class="chat-right">
                      <div class="chat-hour">
                      {format(
                          new Date(Date.parse(data.datetime)),
                          "hh:mm aa"
                        )}{" "}
                        <span class="fa fa-check-circle"></span>{" "}
                        <span class="chat-message">Sent</span>
                      </div>
                      <div class="chat-text">
                      {data.text}
                      </div>
                      <div class="chat-avatar">
                        <img
                          src={`/assets/images/${data.userId}.png`}
                          alt="User"
                        />
                        <div class="chat-name">{data.userId}</div>
                      </div>
                    </li>
                  );
                }  
                else {
                    
                
                  return (
                    <li class="chat-left">
                      <div class="chat-avatar">
                        <img
                          src={`/assets/images/${data.userId}.png`}
                          alt="User"
                        />
                        <div class="chat-name">
                          {data.userId}
                        </div>
                      </div>
                      <div class="chat-text">
                        {data.text}
                      </div>
                      <div class="chat-hour">
                        {format(
                          new Date(Date.parse(data.datetime)),
                          "hh:mm aa"
                        )}
                      </div>
                    </li>
                  );
                }
              })()}
            </div>
          );
        }
      )}
      </>
  );
}

export default Chatdata;
