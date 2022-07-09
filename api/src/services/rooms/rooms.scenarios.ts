import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RoomCreateArgs>({
  room: {
    one: {
      data: {
        title: 'String',
        createdBy: {
          create: {
            email: 'String2503122',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        createdBy: {
          create: {
            email: 'String2743008',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
