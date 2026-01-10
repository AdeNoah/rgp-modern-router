import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ProfilesPage = () => {
    const profiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className='flex  gap-2 text-white'>
        <div className='flex flex-col gap-2'>
            {profiles.map((profile) => (
                <NavLink key={profile} to={`/profiles/${profile}`} 
                className={({isActive}) => {
                    return isActive ? 'text-yellow-200' : ''
                }} >
                    Profile {profile}
                </NavLink> 
            ))}
        </div>
        <Outlet />
    </div>
  )
}

export default ProfilesPage
 