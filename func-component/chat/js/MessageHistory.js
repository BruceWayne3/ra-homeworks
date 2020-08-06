'use strict';
const MessageHistory = ({list}) => {
	const messages = list.map((message) => {
		if(message.type === 'message') {
			return <Message from={message.from} message={message}/>
		}
		if(message.type === 'response') {
			return <Response from={message.from} message={message}/>
		}
		if(message.type === 'typing') {
			return <Typing from={message.from} message={message}/>
		}
	});
  
	return (
		<ul>
		{messages}
		</ul>
		)
};

MessageHistory.defaultProps = {
	list: []
};
