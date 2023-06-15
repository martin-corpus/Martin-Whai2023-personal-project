import { useAuth0 } from '@auth0/auth0-react'
import { addNewUser } from '../apiClient' 
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { NewUser } from '../../models/users'
import { useEffect } from 'react'

const image='/images/users/john_doe.jpg'

function HiUserName() {
  const { user } = useAuth0()
  // const queryClient = useQueryClient()

  // const addUserMutation = useMutation(addNewUser, {
  //   onSuccess: async () => {
  //     queryClient.invalidateQueries(['newUser'])
  //   }
  // })

  // useEffect(() => {
  //   if (user && user.nickname) {
  //     const newUser: NewUser = {
  //       name: user.nickname ?? '',
  //     }
  //     addUserMutation.mutate(newUser)
  //   }
  //   console.log('User nickname:', user?.nickname)
  // }, [])
  
  // if (addUserMutation.isError) {
  //   return <div>There was an error trying to add your new user</div>
  // }

  // if (addUserMutation.isLoading) {
  //   return <div>Adding your new user</div>
  // }
    return (
      <>
        <div className="userContainer">
            <div className="userCircle">
                <span className="userIcon">
                    <img src={image} alt='lego face' />
                </span>
            </div>
            <div>
              {user && <h1 id="userName">Hi {user?.nickname}</h1>}
            </div>
          </div>
      </>  
    )
  }
  
  export default HiUserName

