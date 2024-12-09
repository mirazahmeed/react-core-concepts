// export default function Todo({task, isDone}){
//     return(
//         <h2>Task: {task}</h2>
//     )
// }
// conditional rendering option 1
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return(
//             <h2 style={{textDecoration: 'line-through'}}>Task: {task}</h2>
//         )
//     }
//     else{
//         return(
//             <h2>Task: {task}</h2>
//         )
//     }
// }

// conditional rendering option 2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return(
//             <h2 style={{textDecoration: 'line-through'}}>Task: {task}</h2>
//         )
//     }
//     return(
//         <h2>Task: {task}</h2>
//     )
// }
// conditional rendering option 3
// export default function Todo({task, isDone}){
//     return(
//         <h2> {isDone? 'Finished':'work on'} : {task}</h2>
//     )
// }

// conditional rendering option 4
// export default function Todo({task, isDone}){
//     return(
//         <h2>{task}{isDone&& ': Done'}</h2>
//     )
// }
// conditon rendering option 5
export default function Todo({task, isDone}){
    return(
        <h2>{task}{isDone || ': Do it'}</h2>
    )
}