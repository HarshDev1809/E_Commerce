import "./Comment.css";
import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";

function Comment({ comments }) {
  const commentsCount = 5; // Number of comment to show
  const [pageIndex, setPageIndex] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [commentsToShow, setCommentsToShow] = useState([])

  const updatePageIndex = () => {
    const commentLength = comments.length;
    if (commentLength % commentsCount === 0) {
      setPageCount(commentLength % commentsCount);
    } else {
      setPageCount(Math.ceil(commentLength / commentsCount));
    }
  };

  const print = () => {
    console.log(pageCount);
  };

  // updatePageIndex()

  useEffect(() => {
    updatePageIndex();
    // print()
    console.log(pageIndex);
  }, []);

  const comment = (comment) => {
    return (
      <div className="comment">
        <div className="user-name">
          <span>{comment.name}</span>
        </div>
        <div className="rating">
          <Rating name="read-only" value={comment.rating} readOnly />
        </div>
        <div className="comment-data">
          <p>{comment.data}</p>
        </div>
      </div>
    );
  };

  const showComment = ()=>{
    const maxIndex = comments.length;
    if((pageCount*commentsCount) >= maxIndex){
        if(pageCount*5 === maxIndex){
            setCommentsToShow(comments.slice(-commentsCount));
            return
        }else{
            
        }
    }
    const comment = comments.slice()
  }

  return (
    <div className="comments">
      {/* <div className="user-name">
            <span>{comments.name}</span>
        </div>
        <div className="rating">
        <Rating name="read-only" value={comments.rating} readOnly />
        </div>
        <div className="comment-data">
            <p>{comments.data}</p>
        </div> */}
      <Pagination
        count={pageCount}
        index={pageIndex}
        setPageIndex={setPageIndex}
      />
    </div>
  );
}

export default Comment;
