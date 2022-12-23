import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'roles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('description', 180).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now()).notNullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now()).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
