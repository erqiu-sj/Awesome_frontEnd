import React, { FC } from "react";
import { Comment, Avatar } from "antd";
type Props = {};

const Message: FC<Props> = ({ children }) => {
  return (
    <Comment
      actions={[
        <span key="comment-nested-reply-to">回复Ta</span>,
        <span>举报</span>,
      ]}
      // 如果是二级评论，则在此处添加回复谁的信息
      author={<span>Han Solo</span>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure).
        </p>
      }
    >
      {children}
    </Comment>
  );
};
export default Message;
