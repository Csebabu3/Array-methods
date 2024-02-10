// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Table() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/user")
//       .then(res => setData(res.data))  // Update the data state with the response data
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className='container'>
//         <div>
//             <form action=''>
//                 <input type='text' placeholder='Enter Name'></input>
//                 <input type='text' placeholder='Enter Email'></input>
//                 <button>Add</button>
//             </form>
//         </div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             data.map((user) => (  // Change 'users' to 'user' here
//               <tr key={user.id}>  
//                 <td>{user.id}</td>
//                 <td>{user.fullName}</td>
//                 <td>{user.email}</td>
//                 <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                 </td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;
