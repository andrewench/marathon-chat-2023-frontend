export const AppConstant = {
  app: {
    titlePrefix: 'Marathon | ',
    baseApiUrl: process.env.NEXT_PUBLIC_API_URL,
  },

  login: {
    queries: {
      act: {
        key: 'act',
        resolvedValues: ['sign_in', 'sign_up'],
        defaultValue: 'sign_in',
      },
    },
  },

  tokens: {
    at: {
      prefix: 'at',
      lifeTime: 60 * 5,
    },
    rt: {
      prefix: 'rt',
      lifeTime: 60 * 10,
    },
  },

  validate: {
    stringPattern: {
      min: 'The field must be at least $ characters',
      max: 'The field must be no more than $ characters',
    },
  },
}
