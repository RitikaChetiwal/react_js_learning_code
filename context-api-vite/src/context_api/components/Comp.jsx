import { useContext } from 'react'
import { MyContext } from '../contexts/MyContext';

export const Comp = () => {
  const { message } = useContext(MyContext);
  console.log(message)


  return (
    <>
      <h1>message : {message}</h1>
    </>
  )
}
