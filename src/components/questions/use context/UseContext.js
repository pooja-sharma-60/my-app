import React , {createContext , useContext}from 'react'

const UserContext = createContext();

const UseContext = () => {
const user = "Pooja"
  return (
   <UserContext.Provider value={user}>
    <ChildComponent />
   </UserContext.Provider>
  )
}

export default UseContext

const Component1 = () => {
    return (
        <>
        <ChildComponent />
        </>
    )
}

const ChildComponent = () => {
    const user = useContext(UserContext)
    return (
        <p>{user}</p>
    )
}