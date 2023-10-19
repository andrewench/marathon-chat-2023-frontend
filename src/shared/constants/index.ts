export const AppConstant = {
  app: {
    titlePrefix: 'Marathon | ',
    baseApiUrl: process.env.NEXT_PUBLIC_API_URL,
    baseServerUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  },

  files: {
    avatar: {
      maxSize: 5242880,
      defaultAvatar: '/default_avatar.png',
      defaultChatAvatar: '/default_chat_avatar.svg',
    },
  },

  params: {
    login: {
      queries: {
        act: {
          key: 'act',
          resolvedValues: ['sign_in', 'sign_up'],
          defaultValue: 'sign_in',
        },
      },
    },
    chat: {
      queries: {
        room: {
          key: 'room',
        },
      },
    },
  },

  tokens: {
    at: {
      prefix: 'at',
      lifeTime: 60 * 15,
    },
    rt: {
      prefix: 'rt',
      lifeTime: 60 * 60 * 24 * 7,
    },
  },

  validate: {
    stringPattern: {
      min: 'The field must be at least $ characters',
      max: 'The field must be no more than $ characters',
    },
  },
}
