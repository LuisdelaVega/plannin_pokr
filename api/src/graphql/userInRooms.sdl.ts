export const schema = gql`
  type UserInRoom {
    room: Room!
    roomId: String!
    user: User!
    userId: String!
  }

  type Query {
    userInRooms: [UserInRoom!]! @requireAuth
  }

  input CreateUserInRoomInput {
    roomId: String!
    userId: String!
  }

  input UpdateUserInRoomInput {
    roomId: String
    userId: String
  }
`
