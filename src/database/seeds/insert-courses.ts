import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        { name: "CSS" },
        { name: "Javascript" },
        { name: "React" },
        { name: "Git" },
        { name: "Github" },
        { name: "Typescript" },
        { name: "Express.js" },
        { name: "Database" },
    ]);
};
