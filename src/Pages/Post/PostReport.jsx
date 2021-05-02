import React,{useLayoutEffect} from "react";
import { useHistory } from "react-router";
import "./Post.css";

// assets
import postIcon from "../../Assets/post_icon.png";
import pMap from "../../Assets/pmap.png";

const PostReport = (props) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  const history = useHistory();

  return (
    <React.Fragment>
      <div className="post_home post_report">
        <div>
          <div className="post_header">
            <img src={postIcon} alt="posticon" />
            <h2 className="text_darkblue">
              Post a <strong className="text_lightpurple">Report!</strong>{" "}
            </h2>
            <p className="text_lightgray">
              Get your ideas to other people. Post something that matters!
            </p>
          </div>
        </div>
        <div className="pr_frorm">
          <input
            className="full_input text_lightgray"
            placeholder="Let's give an interesting title"
            type="text"
          />
          <div className="c_textarea">
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              placeholder="Tell us what happened!"
              className="bluegreen_border text_lightgray"
            ></textarea>
          </div>
          <span className="text_bluegreen">
            Enter location or pin location on map
          </span>
          <input
            className="full_input text_lightgray"
            placeholder="Address"
            type="text"
          />
          <img src={pMap} className="pmap" alt="map" />
          <div className="pcontinue_btn">
            <button
              className="text-white bg_lightgreen border_none"
              onClick={() => {
                history.push("/post-upload");
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostReport;
