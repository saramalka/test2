 const Birthday=(props)=>
{
    
    return <>
    {props.age>18 &&<h6>user age over 18 years</h6>} 
    <h1>Happy Birthday! {props.name} You are {props.age} years old! </h1></>
}
export default Birthday