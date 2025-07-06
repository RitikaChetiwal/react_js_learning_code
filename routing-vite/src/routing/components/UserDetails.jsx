import { Link } from 'react-router'

export const UserDetails = () => {

    const userDetails = [
        { name: 'Tony Stark', alias: 'IronMan' },
        { name: 'Dr. Banner', alias: 'Hulk' },
        { name: 'Natasha Romanoff', alias: 'Black Widow' },
        { name: 'Thor', alias: 'Thor-Hero' },
        { name: 'Steve Rogers', alias: 'Captain America' },
        { name: 'Wanda', alias: 'Scarlet Witch' },
        { name: 'Strange', alias: 'Dr. Strange' }
    ]

    return (
        <div>
            <h1>Users</h1>
            {
                userDetails.map((val, index) => (
                    <h2 key={index}><Link to={`/users/${val.alias}`}>{val.name}</Link></h2>

                ))
            }

        </div>
    )
}
