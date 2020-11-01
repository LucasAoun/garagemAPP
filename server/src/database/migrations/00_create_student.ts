import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('student', table=>{
        table.increments('idStudent').primary
        table.string('nameStudent', 80).notNullable
        table.string('lastNameStudent', 80).notNullable
        table.string('emailStudent', 100).notNullable
        table.string('rgStudent', 50).notNullable
        table.integer('cpfStudent', 15).notNullable
        table.date('birthDateStudent').notNullable

    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('student')
}