import { Child } from './Child'

export const Parent = () => {
  const getData = (info) => {
    console.log(`info: ${info}`);

  }
  return (
    <div>
      <Child get = {getData} />
    </div>
  )
}
