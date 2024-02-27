fetch('https://fakestoreapi.com/users')
.then((res)=>res.json())
.then((data)=>{console.log(data)
     let text=""
    data.map((values)=>{
        text+=`<tr>
        <th scope="col">${values.id}</th>
        <th scope="col">${values.email}</th>
        <th scope="col">${values.username}</th>
        <th scope="col">${values.password}</th>
       
      </tr>`

    })
    document.getElementById("result").innerHTML=text
})