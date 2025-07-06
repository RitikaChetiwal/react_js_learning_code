import { Link, Outlet } from 'react-router'
import './Options.css'

export const Options = () => {
  return (
    <div className='options'>
      <Link to='option1'>Option1</Link>
      <Link to='option2'>Option2</Link>
      <Link to='option3'>Option3</Link>
      <Outlet/>
    </div>
  )
}
