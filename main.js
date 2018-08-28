console.log('hello world');
var myInputs = [];

myResponses = [
    'Yes',
    'No',
    'Maybe',
    'Yes, Definitely',
    'Ask again later',
    'It is unclear',
    'Never'
]

var submitQuestion = document.querySelector('#submitQuestion')

submitQuestion.onclick = function () {
    console.log('button clicked')
    var randomAnswer = myResponses[Math.floor(Math.random() * myResponses.length)]
    console.log(randomAnswer)
    var printAnswer = document.querySelector('#answer')
    var userInput = document.querySelector('#userInput').value
    console.log('this is the user input ' ,userInput)
    printAnswer.innerHTML = randomAnswer
    var objectPair = {
        userInput : randomAnswer
    }
    myInputs.push(objectPair)
    console.log(myInputs); 
}

var hiddenContent = document.querySelector('.hiddenContent');
var dataButton = document.querySelector('#dataContainer');
var closeButton = document.querySelector('#closeButton');
dataButton.onclick = function () {
    console.log('old answers clicked')
    hiddenContent.style.display = 'inline';
}

closeButton.onclick = function () {
    console.log('close button clicked');
    hiddenContent.style.display = 'none';
}

