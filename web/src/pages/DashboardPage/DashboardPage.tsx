import { useCallback } from 'react'

import {
  Box,
  Button,
  Collapse,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  useDisclosure,
} from '@chakra-ui/react'
import {
  CreateRoomInput,
  CreateRoomMutation,
  CreateRoomMutationVariables,
} from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import { useForm } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

const CREATE_ROOM = gql`
  mutation CreateRoomMutation($input: CreateRoomInput!) {
    createRoom(input: $input) {
      id
    }
  }
`

const DashboardPage = () => {
  const {
    currentUser: { id: userId },
  } = useAuth()
  const { isOpen, onToggle } = useDisclosure()
  const {
    handleSubmit,
    register,
    formState: { errors: formErrors, isSubmitting },
    reset,
  } = useForm({ mode: 'onBlur' })

  //#region GraphQL Queries & Mutations
  const [createRoom, { loading: mutationLoading, error: mutationError }] =
    useMutation<CreateRoomMutation, CreateRoomMutationVariables>(CREATE_ROOM, {
      onCompleted: ({ createRoom: { id } }) => {
        reset()
        // TODO: Navigate to the Room page
        console.log(id)
      },
    })
  //#endregion

  const onSubmit = useCallback(
    (input: Pick<CreateRoomInput, 'title'>) => {
      createRoom({ variables: { input: { userId, ...input } } })
    },
    [createRoom, userId]
  )

  const onToggleCollapse = () => {
    onToggle()
    reset()
  }

  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <Flex gap={8}>
        <Heading as="h1">Your Rooms</Heading>
        <Button onClick={onToggleCollapse}>Create a Room</Button>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        {/* TODO: Abstract this into it's own component */}
        <Box as={'form'} onSubmit={handleSubmit(onSubmit)} my={4}>
          <Flex alignItems="flex-end" gap={8}>
            <FormControl
              isInvalid={formErrors.title || mutationError}
              flexGrow={3}
            >
              <FormLabel htmlFor="title">Room Title</FormLabel>
              <FormErrorMessage>
                {formErrors.title && formErrors.title.message}
              </FormErrorMessage>
              <Input
                id="title"
                placeholder="Awesome Room Name"
                {...register('title', {
                  required: 'This is required',
                  minLength: {
                    value: 1,
                    message: 'Minimum length should be 1 character',
                  },
                })}
              />
            </FormControl>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting || mutationLoading}
              type="submit"
            >
              Create
            </Button>
          </Flex>
        </Box>
      </Collapse>
      <p>TODO: Here you will see a list of Rooms</p>
    </>
  )
}

export default DashboardPage
