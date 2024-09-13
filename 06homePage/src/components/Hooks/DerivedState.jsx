import { useState } from "react"

// Access by UseState:

export const DerivedState = () =>{
    const[users , setUsers] = useState([
        {name: "Alice" , age: 25},
        {name: "Bob" , age: 35},
        {name: "Charlie" , age: 20},
        {name: "Angles" , age: 45},
    
    ])
    return(
        <>
        <h1>Users Lists :</h1>
        <ul>
            {
                users.map((curElem ,index) =>{
                    return(
                        <li>
                            {curElem.name} - {curElem.age} year old
                        </li>
                    )
                })
            }

        </ul>
        
        </>
    )

}


// Normal way to access the array of objects with map :

// const users = [
//     {name: "Alice" , age: 25},
//     {name: "Bob" , age: 35},
//     {name: "Charlie" , age: 20},
//     {name: "Angles" , age: 45},

// ]

//  export const DerivedState = () =>{
//     return(
//         <>
//         <h1>Users Lists :</h1>
//         <ul>
//             {
//                 users.map((curElem ,index) =>{
//                     return(
//                         <li>
//                             {curElem.name} - {curElem.age} year old
//                         </li>
//                     )
//                 })
//             }

//         </ul>
        
//         </>
//     )

// }