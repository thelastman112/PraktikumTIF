import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable().unique()
      table.string('username', 180).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.integer('role_id').unsigned().references('id').inTable('roles').notNullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now()).notNullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now()).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
