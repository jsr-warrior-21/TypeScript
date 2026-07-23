import React from 'react'


export type profileProps = {
    name:string
}

const Profile = (props:profileProps) => {
  return (
    <div>Private Profile component {props.name}</div>
  )
}

export default Profile