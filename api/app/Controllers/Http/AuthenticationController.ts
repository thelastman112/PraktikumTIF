import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import Logger from '@ioc:Adonis/Core/Logger'

export default class AuthenticationController {
  public async login({ auth, response, request }: HttpContextContract) {
    // Logger.info('asdas')
    try {
      const { email, username, password } = request.body()

      Logger.info(password)

      const user = await User.query()
        .where('email', email || '')
        .orWhere('username', username || '')
        .firstOrFail()

      if (!(await Hash.verify(user.password, '' + password))) {
        return response.unauthorized('Invalid credentials')
      }

      const token = await auth.use('api').generate(user)

      return response.created(token)
    } catch (error) {
      return response.unauthorized(error)
    }
  }
  public async register({ request, response }: HttpContextContract) {
    try {
      const user = await User.create({
        email: request.body().email,
        username: request.body().username,
        password: request.body().password,
      })

      // Logger.info('email')

      return response.created(user)
    } catch (error) {
      return response.badRequest(error)
    }
  }
}
