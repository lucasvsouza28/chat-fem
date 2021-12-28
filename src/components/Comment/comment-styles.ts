import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 60%;
`;

export const Message = styled.div`
  display: flex;
  border-radius: 8px;
  justify-content: space-between;
  background-color: ${ props => props.theme.color.white };
  padding: 24px;
  margin-bottom: 20px;
  gap: 24px;
`;

export const ThreadMessage = styled(Message)`
  position: relative;
`;

export const CommentContainer = styled.div`
  margin-bottom: 1rem;
  position: relative;
`;

export const CommentText = styled.p`
  color: ${ props => props.theme.color.grayish_blue };
  font-size: 16px;
  line-height: 24px;
`;

export const CommentVotes = styled.div`
  height: 100px;
  width: 40px;
  background-color: ${ props => props.theme.color.very_light_gray } ;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${ props => props.theme.color.moderate_blue };
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  gap: 19px;
`;

export const CommentInfo = styled.div`
  flex: 1;
`;

export const CommentHeader = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 15px;
  align-items: center;
`;

export const AuthorAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const AuthorName = styled.div`
  color: ${ props => props.theme.color.dark_blue };
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

export const ReplyButton = styled.button`
  display: flex;
  justify-self: end;
  align-items: center;
  gap: 8px;
  color: ${ props => props.theme.color.moderate_blue };
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`;

export const ThreadContainer = styled.div`
  padding: 0 0 0 4rem;
  position: relative;

  ::before {
      content: '';
      width: 2px;
      height: 100%;
      position: absolute;
      left: 2rem;
      background-color: ${ props => props.theme.color.light_gray };
  }
`;