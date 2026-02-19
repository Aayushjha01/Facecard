import React from 'react'

const UserCard = () => {
  return (
    <div className=" w-[20rem] h-[30rem] shadow-2xl rounded-lg overflow-hidden relative">
        <div className='w-full h-[10rem] bg-blue-800 absolute '>
            <img  className="h-full rounded-full translate-x-1/2 translate-y-1/4 border-4
             border-blue-800 p-1 bg-white" src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=" 
            alt="Error loading image" />
        </div>
    </div>
  )
}

export default UserCard