import type {
  QueryResolvers,
  MutationResolvers,
  RoomResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const rooms: QueryResolvers['rooms'] = () => {
  return db.room.findMany()
}

export const room: QueryResolvers['room'] = ({ id }) => {
  return db.room.findUnique({
    where: { id },
  })
}

export const createRoom: MutationResolvers['createRoom'] = ({ input }) => {
  return db.room.create({
    data: input,
  })
}

export const updateRoom: MutationResolvers['updateRoom'] = ({ id, input }) => {
  return db.room.update({
    data: input,
    where: { id },
  })
}

export const deleteRoom: MutationResolvers['deleteRoom'] = ({ id }) => {
  return db.room.delete({
    where: { id },
  })
}

export const Room: RoomResolvers = {
  players: (_obj, { root }) =>
    db.room.findUnique({ where: { id: root.id } }).players(),
  createdBy: (_obj, { root }) =>
    db.room.findUnique({ where: { id: root.id } }).createdBy(),
}
