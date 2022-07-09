import { Button, Flex, Heading } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CREATE_ROOM = gql`
  mutation CreateRoomMutation($input: CreateRoomInput!) {
    createRoom(input: $input) {
      id
    }
  }
`

const DashboardPage = () => {
  const {
    currentUser: { id },
  } = useAuth()

  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <Flex gap={8}>
        <Heading as="h1">Your Rooms</Heading>
        <Button>Create a Room {id}</Button>
      </Flex>
      <p>
        Find me in <code>./web/src/pages/DashboardPage/DashboardPage.tsx</code>
      </p>
      <p>
        My default route is named <code>dashboard</code>, link to me with `
        <Link to={routes.dashboard()}>Dashboard</Link>`
      </p>
    </>
  )
}

export default DashboardPage
