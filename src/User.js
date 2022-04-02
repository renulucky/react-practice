import {useParams}  from 'react-router-dom';
function User(prop)
{
    let params= useParams();
    console.log(params.id)
    return(
        <div>
            <h1>Hi this is user no {params.id}</h1>
        </div>
    )
}
export default User;