import { Box, Button, Flex, Heading, Link, Tooltip } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Link as RwLink, routes, useLocation } from '@redwoodjs/router'

type AppLayoutProps = {
  children?: React.ReactNode
}

const boxPaddingProps = {
  py: 4,
  px: 8,
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { logOut, isAuthenticated, currentUser } = useAuth()
  const { pathname } = useLocation()

  const isAuthenticating =
    routes.login() === pathname || routes.signup() === pathname

  return (
    <>
      <header>
        <Box bg="main.900" {...boxPaddingProps}>
          <Flex alignItems="center" justifyContent="space-between">
            <Heading as="h1">
              <Link as={RwLink} to={routes.home()} color="white">
                Plannin Pokr
              </Link>
            </Heading>

            {/* Login & Logout Buttons */}
            {isAuthenticated && (
              <Flex
                flexDirection={['column', 'column', 'row', 'row']} // [sm, md, lg, xl]
                alignItems="center"
                justifyContent="space-between"
                gap={8}
              >
                <Tooltip hasArrow label="Go to your Dashboard">
                  <Link
                    as={RwLink}
                    color="white"
                    to={routes.dashboard()}
                  >{`Hi, ${currentUser.email}`}</Link>
                </Tooltip>
                <Button onClick={logOut}>Logout</Button>
              </Flex>
            )}
            {!isAuthenticated && !isAuthenticating && (
              <Button as={RwLink} to={routes.login()}>
                Login
              </Button>
            )}
          </Flex>
        </Box>
      </header>
      <main>
        <Box bg="white" {...boxPaddingProps}>
          {children}
        </Box>
      </main>
    </>
  )
}

export default AppLayout
