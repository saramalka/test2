 const Cities=()=>{
    const cities=["Jerusalem","Tel aviv","Bet Shemesh","Arad"]
     return<>
    <ul>
        {cities.map(city=><li>{city}</li>)}
    </ul>
    </>
    }
    export default Cities