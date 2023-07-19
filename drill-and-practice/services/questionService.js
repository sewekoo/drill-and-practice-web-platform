import { sql } from "../database/database.js";

// Query to create a new question with given parameters
const addQuestion = async (userId, topicId, questionText) => {
    await sql`INSERT INTO questions(user_id, topic_id, question_text) VALUES (${userId}, ${topicId}, ${questionText})`;
};

// Query to find a specific question based on questionId and topicId parameters
const listQuestion = async (topicId, questionId) => {
    const rows = await sql`SELECT * FROM questions WHERE topic_id = ${topicId} AND id = ${questionId}`;
    if (rows && rows.length > 0) {
        return rows[0];
    } else {
        return { id: 0, question_text: "Unknown", user_id: 1, topic_id: 1 };
    }
};

// Query to find all questions related to specific topic based on parameter topicId
const listQuestions = async (topicId) => {
    const rows = await sql`SELECT * FROM questions WHERE topic_id = ${topicId}`;
    return rows;
};

const countQuestions = async (topicId) => {
    const rows = await sql`SELECT * FROM questions WHERE topic_id = ${topicId}`;
    return rows.length;
};

const randomQuestion = async (topicId) => {
    const rows = await sql`SELECT * FROM questions WHERE topic_id = ${topicId} ORDER BY random()`;
    if (rows && rows.length > 0) {
        return rows[0];
    } else {
        return { id: 0, question_text: "Unknown", user_id: 1, topic_id: 1 };
    }
};

const randomQuestionAnyTopic = async () => {
    const rows = await sql`SELECT * FROM questions ORDER BY random()`;
    if (rows && rows.length > 0) {
        return rows[0];
    } else {
        return { id: 0, question_text: "Unknown", user_id: 1, topic_id: 1 };
    }
};

export { addQuestion, listQuestion, listQuestions, countQuestions, randomQuestion, randomQuestionAnyTopic };