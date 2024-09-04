import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Mani Rajesh",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Mani Rajesh",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "Mani Rajesh",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [
              {
                name: "Mani Rajesh",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies: [
                  {
                    name: "Mani Rajesh",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mani Rajesh",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [],
  },
  {
    name: "Mani Rajesh",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, id) => (
    <div>
      <Comment data={comment} key={id} />
      <div className="px-5 ">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="w-[900px] xsm:max-md:w-full max-w-[900px]">
      <h1 className="mx-6 text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
