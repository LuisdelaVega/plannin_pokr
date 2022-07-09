import { userInRooms } from './userInRooms'
import type { StandardScenario } from './userInRooms.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userInRooms', () => {
  scenario('returns all userInRooms', async (scenario: StandardScenario) => {
    const result = await userInRooms()

    expect(result.length).toEqual(Object.keys(scenario.userInRoom).length)
  })
})
