import * as topicService from "../../services/topicService.js";
import * as questionService from "../../services/questionService.js";
import * as optionService from "../../services/optionService.js";

const showQuizes = async ({ render }) => {
    render("quizTopics.eta", { topics: await topicService.listTopics() });
};

const selectRandomQuestion = async ({ render, response, params }) => {
    const questionCount = await questionService.countQuestions(params.tId);
    if (questionCount <= 0) {
        render("noQuestions.eta");
    } else {
        const randomQuestion = await questionService.randomQuestion(params.tId);
        response.redirect(`/quiz/${params.tId}/questions/${randomQuestion.id}`);
    }
};

const quizQuestion = async ({ render, params }) => {
    const currentOptions = await optionService.listOptions(params.qId);
    render("quizQuestion.eta", { question: await questionService.listQuestion(params.tId, params.qId), options: currentOptions });
};

const chooseOption = async ({ response, params, state }) => {
    const user = await state.session.get("user");
    await optionService.addAnswer(user.id, params.qId, params.oId);
    const option = await optionService.optionById(params.qId, params.oId);
    if (option.is_correct) {
        response.redirect(`/quiz/${params.tId}/questions/${params.qId}/correct`);
    } else {
        response.redirect(`/quiz/${params.tId}/questions/${params.qId}/incorrect`);
    }
};

const correctAnswer = async ({ render, params }) => {
    render("quizCorrect.eta", { question: await questionService.listQuestion(params.tId, params.qId) });
};

const incorrectAnswer = async ({ render, params }) => {
    render("quizIncorrect.eta", { question: await questionService.listQuestion(params.tId, params.qId) });
};

export { showQuizes, selectRandomQuestion, quizQuestion, chooseOption, correctAnswer, incorrectAnswer };