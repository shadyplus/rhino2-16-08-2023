const startButton = document.querySelector('.start');
const nextButton = document.querySelector('.next');
const finalButton = document.querySelector('.final');
const survey = document.querySelector('.survey');
const result =  document.querySelector('.result');
const allQuestionBlock = document.querySelector('.all-questions');
const NodeAllQuestion = document.querySelectorAll('.question');
const check = survey.querySelectorAll('.check');
const from = survey.querySelector('.from');
const of = survey.querySelector('.of');
const answers = [];
let questNumber = 0;
let surveyResult = [];

check.forEach(item => item.addEventListener('click', checked));
NodeAllQuestion.forEach(block => block.remove());
NodeAllQuestion.forEach(item => answers.push(item.childNodes[1].childNodes[0].textContent))

function getAnswer (){
    let block = {};
    block.question = answers[questNumber];
    block.answer = document.querySelector('.checked').textContent;
    surveyResult.push(block);
}

function checked (){
    check.forEach(item => item.classList.remove('checked'))
    let item = this;
    this.classList.add('checked');
    if (questNumber === NodeAllQuestion.length-1){
        finalButton.style.display='unset';
    }else nextButton.style.display='unset';
}
function showQuestion (){
    document.querySelector('main').style.paddingBottom='150px'
    startButton.style.display='none'
    of.innerHTML = NodeAllQuestion.length;
    from.innerHTML = questNumber + 1;
    survey.style.display='block';
    allQuestionBlock.prepend(NodeAllQuestion[questNumber])
    document.querySelector('main').scrollIntoView({block: "end",behavior: "smooth"});
}
function nextQuestion (){
    getAnswer();
    questNumber++;
    NodeAllQuestion.forEach(block => block.remove());
    from.innerHTML = questNumber + 1;
    allQuestionBlock.prepend(NodeAllQuestion[questNumber])
    nextButton.style.display='none';
}
function showResult(){
    getAnswer()
    console.log(surveyResult)
    survey.style.display='none';
    result.style.display='block';

    let message = ""

    for (let i = 0; i < surveyResult.length; i++){
        // console.log(surveyResult[i]);
        message += `Вопрос: ${surveyResult[i].question} \nОтвет: ${surveyResult[i].answer} \n\n`;
    }
    // console.log(message);

    $('form input[name="comment"]').val(message);

}
function showForm (){
    document.querySelector('.top-block').style.opacity='0';
    document.querySelector('.top-block').style.display='none';
    document.querySelector('#toform').style.display='flex';
    setTimeout(function (){
        document.querySelector('main').style.paddingBottom='30px'
    },50)
    result.style.display='none';
    document.querySelector('main').scrollIntoView({block: "start",behavior: "smooth"});
}
result.addEventListener('click',showForm)
finalButton.addEventListener('click',showResult)
startButton.addEventListener('click',showQuestion)
nextButton.addEventListener('click',nextQuestion)