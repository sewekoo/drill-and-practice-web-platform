import { sql } from "../database/database.js";

const listOptions = async (questionId) => {
    const rows = await sql`SELECT * FROM question_answer_options WHERE question_id = ${questionId}`;
    return rows;
};

const addOption = async (questionId, optionText, isCorrect) => {
    await sql`INSERT INTO question_answer_options(question_id, option_text, is_correct) VALUES (${questionId}, ${optionText}, ${isCorrect})`;
};

const deleteOption = async (questionId, optionId) => {
    await sql`DELETE FROM question_answer_options WHERE question_id = ${questionId} AND id = ${optionId}`;
};

const optionById = async (questionId, optionId) => {
    const rows = await sql`SELECT * FROM question_answer_options WHERE question_id = ${questionId} AND id = ${optionId}`;
    if (rows && rows.length > 0) {
        return rows[0];
    } else {
        return { id: 0, option_text: "Unknown", question_id: 1, is_correct: false };
    }
};

const addAnswer = async (userId, questionId, optionId) => {
    await sql`INSERT INTO question_answers(user_id, question_id, question_answer_option_id) VALUES (${userId}, ${questionId}, ${optionId})`;
};

export { listOptions, addOption, deleteOption, addAnswer, optionById };