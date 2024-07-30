import { useState,useEffect } from "react";
import AXIOS from 'axios';
function Allrecords(){
    const [record,setRecord] = useState([])
    useEffect (()=>{
     const url="http://localhost:9000/allrecords"
     AXIOS.get(url).then((res)=>{
        setRecord(res.data)
     })
    })
    return(
        <> 
           <table> 
            <thead> 
                <tr> 
                    <th> idno  </th>
                    <th> Username</th>
                    <th> Action</th>
                </tr>

            </thead>
            <tbody>
                
            </tbody>
           </table>
        </>
    )
}

export default Allrecords;