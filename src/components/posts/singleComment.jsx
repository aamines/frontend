import React from "react";
import './comments.css'
import { MdModeComment } from "react-icons/md";
import styled from "styled-components";

const SingleComment = ({commentContent,pic})=>{
    return(
        <>
        <div className="comments">
        <img src={pic} alt="user" className="commenterImg"/>
        <div className="commentContent">{commentContent}</div>
      </div>
      <div className="commentReactions">
      <div className="reactions">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p className="f-low">356</p>
        </div>
        <div className="commentstats">
          <MdModeComment className="icon" />
          <p className="f-low">100</p>
        </div>

        <p className="f-left">Load replies</p>
      </div></>
    )
}


export default SingleComment