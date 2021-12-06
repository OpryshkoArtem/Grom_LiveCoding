/* Global LEX Event
{
	'enviromentRecord': {
		'message': 'Test',
		'weight': 55,
		'run': {
			 console.log('RUN');
			},
		'createMessenger': {......},
		'messanger': .......,
	...........
	...........
	},
	'outerLexEnv': null
}

createMessenger1 LEX Event
{
	'enviromentRecord': {
		'message': 'hello',
  	'sender': ...,
		'sendMessage': {...},
		'setSender': {...},
		'setMessage': {...},
	...........
	},
	'outerLexEnv': global
}

createMessenger2 LEX Event
{
	'enviromentRecord': {
		'message': 'Just learn it',
  	'sender': ...,
		'sendMessage': {...},
		'setSender': {...},
		'setMessage': {...},
	...........
	},
	'outerLexEnv': global
}

setMessage LEX Event
{
	'enviromentRecord': {
		'text': 'hello',
	},
	'outerLexEnv': createMessenger1
}

printer LEX Event
{
	'enviromentRecord': {
		...
	},
	'outerLexEnv': createMessenger1
}
*/

const message = 'Test';
const weight = 55;

for (let index = 0; index < 10; index += 1) {
  const weight = 100;
  console.log(weight);
  console.log(index);
}

function run() {
  console.log('RUN');
}

// input: none
// otput: obj
function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  // input: string
  // otput: undefined
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  function printer() {
    console.log(weight);
  }

  return {
    sendMessage,
    setMessage,
    setSender,
    printer,
  };
}

const messanger1 = createMessenger();
messanger1.setMessage('hello');
messanger1.printer();

const messanger2 = createMessenger();
run();
