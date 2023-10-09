export const AppConstant = {
  app: {
    titlePrefix: 'Marathon | ',
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
}
