import { useParams } from 'react-router'

export const UserInfo = () => {
    const params = useParams()
    console.log(params);
    
  return (
    <div>
        <h1>{params.slug}</h1>
    </div>
  )
}
