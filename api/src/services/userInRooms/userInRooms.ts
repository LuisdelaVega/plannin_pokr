import type { QueryResolvers, UserInRoomResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const userInRooms: QueryResolvers['userInRooms'] = () => {
  return db.userInRoom.findMany()
}

export const userInRoom: QueryResolvers['userInRoom'] = ({ id }) => {
  return db.userInRoom.findUnique({
    where: { id },
  })
}

export const UserInRoom: UserInRoomResolvers = {
  room: (_obj, { root }) =>
    db.userInRoom.findUnique({ where: { id: root.id } }).room(),
  user: (_obj, { root }) =>
    db.userInRoom.findUnique({ where: { id: root.id } }).user(),
}
