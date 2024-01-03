import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Comment {
  body: string;
  comments: Array<Comment>;
}

const dummyComments: Array<Comment> = [
  {
    body: 'This is a comment1',
    comments: [],
  },
  {
    body: 'This is a comment2',
    comments: [],
  },
  {
    body: 'This is a comment3',
    comments: [],
  }
];


export default function Comments() {

  const [comments, setComments] = useState(dummyComments); 
  

  const onComment = (newComment: Comment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <div className="flex flex-col gap-4 h-screen w-screen p-6 mt-5">
      <span style={{color:'blue'}}>Comments :</span>
        <CommentInput onComment={onComment}/>
      <div className="flex flex-col gap-4 mt-10">
        {comments.map((comment) => (
          <CommentItem comment={comment}/>
        ))}
      </div>

    </div>
  );
}



interface CommentItemProps {
  comment: Comment;
}

const CommentItem = ({ comment }: CommentItemProps) => {

  const [isReplying, setIsReplying] = useState(false);
  const [comments, setComments] = useState(comment.comments) 

  const onComment = (newComment: Comment) =>{
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <div className="flex flex-col border-[1px] border-zinc-500 rounded-md p-3 my-4">
      <span>{comment.body}</span>
      
        {isReplying ? (
          <Link to=''><a  style={{ textDecoration: 'none', color:'red', marginLeft:'50px' }}
          onClick={() => setIsReplying(false)}>Cancel</a>
          </Link>
        ) : (
          <Link to=''><a  style={{ textDecoration: 'none', color:'red', marginLeft:'50px' }}
          onClick={() => setIsReplying(true)}>Reply</a>
          </Link>
          
        )}
      
      {isReplying && <CommentInput onComment={onComment}/>}
      <div className="flex flex-col gap-3">
        {comments.map((comment) => (
          <CommentItem comment={comment}/>
        ))}
      </div>

    </div>
  );
};

interface CommentInputProps {
  onComment: (newComment: Comment) => void;
}

const CommentInput = ({onComment}: CommentInputProps) => {
  const [commentBody, setCommentBody] = useState('');
  return (
    <div className='flex flex-col mt-4'>
    <input
      value={commentBody}
      onChange={(event) => setCommentBody(event.target.value)} 
      placeholder='What are your thoughts?' 
      className="comment-input" 
      style={{ border: 'none', outline: 'none', borderBottom:'1px solid ' }}
    />
    <button className="button" 
      onClick={() => onComment({ body: commentBody, comments: [] })}
    >Post
    </button>
    </div>
  );
};