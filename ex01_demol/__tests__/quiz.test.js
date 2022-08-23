import {Quiz} from "../quiz"

const CORRECT_SOLUTIONS = [1, 2, 2, 1, 3];
const ANSWER_5_CORRECT = CORRECT_SOLUTIONS;
const ANSWER_4_CORRECT = [0, 2, 2, 1, 3];
const ANSWER_3_CORRECT = [0, 0, 2, 1, 3];

test('equal Scores - Yens Is Faster', () => {
    const quiz = Quiz(CORRECT_SOLUTIONS, "Uma");
    quiz.giveAnswers("Uma", ANSWER_5_CORRECT, 110);
    quiz.giveAnswers("Yens", ANSWER_5_CORRECT, 80);
    quiz.giveAnswers("Sven", ANSWER_5_CORRECT, 120);
    expect(quiz.winner).toBe("Yens");
});

test('equal Scores - Sven Is Faster', () => {
    const quiz = Quiz(CORRECT_SOLUTIONS, "Uma");
    quiz.giveAnswers("Uma", ANSWER_5_CORRECT, 120);
    quiz.giveAnswers("Yens", ANSWER_5_CORRECT, 100);
    quiz.giveAnswers("Sven", ANSWER_5_CORRECT, 80);
    expect(quiz.winner).toBe("Sven");
});

test('equal Scores - Uma Is Faster Next Is Sven', () => {
    const quiz = Quiz(CORRECT_SOLUTIONS, "Uma");
    quiz.giveAnswers("Uma", ANSWER_5_CORRECT, 70);
    quiz.giveAnswers("Yens", ANSWER_5_CORRECT, 100);
    quiz.giveAnswers("Sven", ANSWER_5_CORRECT, 80);
    expect(quiz.winner).toBe("Sven");
});

test('best Scores Sven', () => {
    const quiz = Quiz(CORRECT_SOLUTIONS, "Uma");
    quiz.giveAnswers("Uma", ANSWER_4_CORRECT, 70);
    quiz.giveAnswers("Yens", ANSWER_4_CORRECT, 100);
    quiz.giveAnswers("Sven", ANSWER_5_CORRECT, 80);
    expect(quiz.winner).toBe("Sven");
});

test('best Scores Sven - time is not important', () => {
    const quiz = Quiz(CORRECT_SOLUTIONS, "Uma");
    quiz.giveAnswers("Uma", ANSWER_4_CORRECT, 70);
    quiz.giveAnswers("Yens", ANSWER_4_CORRECT, 50);
    quiz.giveAnswers("Sven", ANSWER_5_CORRECT, 80);
    expect(quiz.winner).toBe("Sven");
});

test('best Scores Yens - time is not important', () => {
    const quiz = Quiz(CORRECT_SOLUTIONS, "Uma");
    quiz.giveAnswers("Uma", ANSWER_3_CORRECT, 70);
    quiz.giveAnswers("Yens", ANSWER_4_CORRECT, 100);
    quiz.giveAnswers("Sven", ANSWER_3_CORRECT, 80);
    expect(quiz.winner).toBe("Yens");
});

test('best Scores Uma - next is Sven', () => {
    const quiz = Quiz(CORRECT_SOLUTIONS, "Uma");
    quiz.giveAnswers("Uma", ANSWER_5_CORRECT, 70);
    quiz.giveAnswers("Yens", ANSWER_3_CORRECT, 50);
    quiz.giveAnswers("Sven", ANSWER_4_CORRECT, 80);
    expect(quiz.winner).toBe("Sven");
});
