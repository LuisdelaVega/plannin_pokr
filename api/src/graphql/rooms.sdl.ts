export const schema = gql`
  type Room {
    id: String!
    title: String!
    players: [UserInRoom]!
    createdAt: DateTime!
    createdBy: User!
    userId: String!
  }

  type Query {
    rooms: [Room!]! @requireAuth
    room(id: String!): Room @requireAuth
  }

  input CreateRoomInput {
    title: String!
    userId: String!
  }

  input UpdateRoomInput {
    title: String
    userId: String
  }

  type Mutation {
    createRoom(input: CreateRoomInput!): Room! @skipAuth
    updateRoom(id: String!, input: UpdateRoomInput!): Room! @requireAuth
    deleteRoom(id: String!): Room! @requireAuth
  }
`
