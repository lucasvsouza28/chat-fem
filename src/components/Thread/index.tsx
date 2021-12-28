import * as SC from './thread-styles';
import { Comment, MessageType } from '../../components/Comment';

export const Thread = () => {
  const createId = (): string => Math.ceil(Math.random() * 10000).toString();

  const createMessage = (): MessageType => ({
    id: createId(),
    text: `thats a message ${createId()}`,
    votes: Math.ceil(Math.random() * 20),    
    author: {
      id: createId(),
      name: `Author ${createId()}`,
      avatar_url: 'https://cataas.com/cat',
    },
    children: []
  } as MessageType);

  const messages = [
    createMessage(),
    {
      ...createMessage(),
      children: (new Array(5).fill(createMessage())) as MessageType[]
    },
    {
      ...createMessage(),
      children: [
        { ...createMessage(), children: new Array(2).fill(createMessage()) },
        ...new Array(2).fill(createMessage()),
      ]
    },
  ];

  return (
    <SC.Container>
      { messages.map(m => (
        <Comment
          key={m.id}
          message={m}
        />
      )) }
    </SC.Container>
  )
}
