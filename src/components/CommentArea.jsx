import React, { useState, useEffect, useCallback } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

function CommentArea(props) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchComments = useCallback(async () => {
    setIsLoading(true);
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + props.asin,
        {
          headers: {
            Authorization:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQxMDk1YmIxODE2MzAwMTRjOGZmODciLCJpYXQiOjE2OTg3NjEwNTEsImV4cCI6MTY5OTk3MDY1MX0.wGepSCkFaeJ0KSXyHomesrxE0uXnCp8ilmqfdJCKd2c",
          },
        }
      );
      if (response.ok) {
        let comments = await response.json();
        setComments(comments);
        setIsLoading(false);
        setIsError(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  }, [props.asin]);

  useEffect(() => {
    if (props.asin) {
      fetchComments();
    }
  }, [props.asin, fetchComments]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
}

export default CommentArea;