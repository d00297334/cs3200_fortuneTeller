console.log('hello world');
var myInputs = [];

myResponses = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes - definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outllook not so good',
    'Very doubtful',
    'No'
]

var submitQuestion = document.querySelector('#submitQuestion')
var errorParagraph = document.querySelector('#error');
var userInput = document.querySelector('#userInput').value


submitQuestion.onclick = function () {
    if (userInput != "") {
        //errorParagraph.style.display = 'none';
        var randomAnswer = myResponses[Math.floor(Math.random() * myResponses.length)]
        var printAnswer = document.querySelector('#answer')
        var userInput = document.querySelector('#userInput').value
        printAnswer.innerHTML = randomAnswer
        
        
    } else {
        errorParagraph.style.display = 'inline';
        errorParagraph.innerHTML = 'Text box can not be empty';
        errorParagraph.style.color = 'red';
    }

    
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

