import Joi from 'joi'

export default {
  name: 'words',
  version: '1.0.0',
  register: server => {

    server.route({
      method: 'GET',
      path: '/v1/words/{acronym}',
      options: {
        tags: ['v1', 'api'],
        validate: {
          params: {
            acronym: Joi.string().required().min(1).max(128),
          },
        },
      },
      handler: (request, h) => {
        const { acronym } = request.params
        console.log(acronym)


        return {}
      },
    })
  },
}
