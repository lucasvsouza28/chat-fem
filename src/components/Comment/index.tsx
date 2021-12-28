import ReplySvg from '../../assets/reply.svg?component';
import * as SC from './comment-styles';
import VoteButton from './components/VoteButton';

export type MessageType = {
  id: string;
  text: string;
  votes: number;
  author: {
    id: string;
    name: string;
    avatar_url: string;
  }
  children?: MessageType[];
};

type CommentProps = {
  message: MessageType;
};

export const Comment = ({
  message,
}: CommentProps) => {

  const handleUpvote = (messageId: string) => {};

  const handleDownvote = (messageId: string) => {};

  return (
    <SC.CommentContainer
      key={message.id}
    >
      <SC.Message>
        <SC.CommentVotes>
          <VoteButton
            type="plus"
            onClick={() => handleUpvote(message.id)}
          />
          {message.votes}
          <VoteButton
            type="minus"
            onClick={() => handleDownvote(message.id)}
          />
        </SC.CommentVotes>
        <SC.CommentInfo>
          <SC.CommentHeader>
            <SC.AuthorAvatar src={message.author.avatar_url} />
            <SC.AuthorName>
              {message.author.name}
            </SC.AuthorName>
            <SC.ReplyButton>
              <ReplySvg /> Reply
            </SC.ReplyButton>
          </SC.CommentHeader>
          <SC.CommentText>
            {message.text}
          </SC.CommentText>
        </SC.CommentInfo>

      </SC.Message>

      { (message.children?.length ?? 0) > 0 && (
        <SC.ThreadContainer>
          { message.children?.map((child, i) => (
            <Comment
              key={child.id + i.toString()}
              message={child}
            />
          ))}
        </SC.ThreadContainer>
      ) }

    </SC.CommentContainer>
  )
}
