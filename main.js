console.log('hello world');


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
    printAnswer.innerHTML = randomAnswer
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
