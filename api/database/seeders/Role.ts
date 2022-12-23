import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await Role.createMany([{ description: 'Admin' }, { description: 'User' }])
  }
}
