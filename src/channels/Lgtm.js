import { Link } from "react-router-dom";

import Chatdata from "../components/Chatdata";

function Lgtm() {

// getting values from the selected option. after that the chat UI will get changed according to the selected users.
// though I could not do the actual rendering based on the selected field. but atleast the UI looks similar as requested.


    var selectedValue = "Sam";

    var handleOnChange = (e) => {
      selectedValue = e.target.value;
      
      alert(selectedValue);
      e.preventDefault();
    };
  
    return (
      <div class="container">
        <div class="page-title">
          <div class="row gutters">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <h5 class="title">1 day chat App</h5>
              <p>All messages will be deleted at every 00:00 UTC</p>
            </div>
          </div>
        </div>
  
        <div class="content-wrapper">
          <div class="row gutters">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="card m-0">
                <div class="row no-gutters">
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                    <div class="users-container">
                      <div class="form-group">
                        <label for="exampleFormControlSelect1">
                          1. Choose your user
                        </label>
                        <select
                          onChange={(e) => handleOnChange(e)}
                          class="form-control select-field"
                          id="exampleFormControlSelect1"
                        >
                          <option value="Joyse">Joyse</option>
                          <option value="Sam">Sam</option>
                          <option value="Russell">Russell</option>
                        </select>
                      </div>
                      <p>2. Choose your Channel</p>
                      <ul class="users">
                        <Link to="/general">
                          <li class="channel">
                            <p class="name-time">General Channel</p>
                          </li>
                        </Link>
                        <Link to="/technology">
                          <li class="channel">
                            <p class="name-time">Technology Channel</p>
                          </li>
                        </Link>
                        <Link to="/lgtm">
                          <li class="channel active-user">
                            <p class="name-time">LGTM Channel</p>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                    <div class="selected-user">
                      <span>LGTM Channel</span>
                    </div>
                    <div class="chat-container">
                      <ul class="chat-box chatContainerScroll">
                        <li class="chat-left">
                          <button type="button" class="btn btn-info">
                            Read More <i class="fa fa-arrow-up"></i>
                          </button>
                        </li>
  
                        <Chatdata data={selectedValue} />
  
                        <li class="left">
                          <button type="button" class="btn btn-info">
                            Read More <i class="fa fa-arrow-down"></i>
                          </button>
                        </li>
                      </ul>
                      <div class="form-group mt-3 mb-0">
                        <textarea
                          class="form-control"
                          rows="3"
                          placeholder="Type your message here..."
                        ></textarea>
                        <button type="button" class="btn btn-info">
                          Send Message <i class="fa fa-send"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Lgtm;
