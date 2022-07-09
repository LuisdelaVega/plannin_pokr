import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserInRoomCreateArgs>({
  userInRoom: {
    one: {
      data: {
        room: {
          create: {
            title: 'String',
            createdBy: {
              create: {
                email: 'String9623273',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String9070570',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        room: {
          create: {
            title: 'String',
            createdBy: {
              create: {
                email: 'String5920465',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String9847073',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
