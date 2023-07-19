import { sql } from "../database/database.js";

const countAllTopics = async () => {
    const rows = await sql`SELECT * FROM topics`;
    return rows;
};

const countAllQuestions = async () => {
    const rows = await sql`SELECT * FROM questions`;
    return rows;
};

const countAllAnswers = async () => {
    const rows = await sql`SELECT * FROM question_answers`;
    return rows;
};

export { countAllTopics, countAllQuestions, countAllAnswers };