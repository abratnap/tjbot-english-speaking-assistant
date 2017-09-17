/*
User-specific configuration
    ** IMPORTANT NOTE ********************
    * Please ensure you do not interchange your username and password.
    * Hint: Your username is the lengthy value ~ 36 digits including a hyphen
    * Hint: Your password is the smaller value ~ 12 characters
*/ 

exports.conversationWorkspaceId = '0d1274ad-3c91-45d9-b330-18a888a3bcf7'; // replace with the workspace identifier of your conversation

// Create the credentials object for export
exports.credentials = {};

// Watson Conversation
// https://www.ibm.com/watson/developercloud/conversation.html
/*exports.credentials.conversation = {
	password: '',
	username: ''
};*/

// Watson Speech to Text
// https://www.ibm.com/watson/developercloud/speech-to-text.html
/*exports.credentials.speech_to_text = {
	password: '',
	username: ''
};*/

// Watson Text to Speech
// https://www.ibm.com/watson/developercloud/text-to-speech.html
/*exports.credentials.text_to_speech = {
	password: '',
	username: ''
};*/

exports.credentials.conversation = {
  url: 'https://gateway.watsonplatform.net/conversation/api',
  username: 'af421b13-3eb5-4f71-8fef-f861d8eced53',
  password: 'sVEnMhqoBDyt'
}

exports.credentials.speech_to_text = {
  url: "https://stream.watsonplatform.net/speech-to-text/api",
  username: "06dea86c-c81a-4822-8a1e-900749823c7f",
  password: "6fMiXLz0vaQz"
}

exports.credentials.text_to_speech = {
  url: "https://stream.watsonplatform.net/text-to-speech/api",
  username: "3b39a4df-3937-4cfe-bc81-f35a2a4222bc",
  password: "NSbQScrAPQ0P"
}
