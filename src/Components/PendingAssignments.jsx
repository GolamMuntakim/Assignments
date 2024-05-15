import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const PendingAssignments = () => {
    const [pending, setPending] = useState([])
    const [error, setError] = useState(null)
    const {user} = useContext(AuthContext)
    // const navigate = useNavigate()
    // console.log(user)
    
    useEffect(()=>{
        if(user && pending.length ===0){
          getData()
        } 
    },[user,pending])
    const getData= async()=>{
        try{
          const response = await axios(`${import.meta.env.VITE_API_URL}/pendingassignments`)
            setPending(response.data)
            setError(null)
            // navigate('/')
        }catch(err){
          console.log(err)
          setError('error')
        }
        
    }
    // console.log(pending)
    const pendingassignments = pending.filter(assignment => assignment.status !== 'completed')
    return (
        <div>
          <Helmet>
            <title>
              pending Assignment
            </title>
          </Helmet>
             <section className='container px-4 mx-auto pt-12 min-h-[calc(100vh-306px)]'>
      <div className='flex justify-center items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>Pending Assignments</h2>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Assignments Title</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Assignment Marks</span>
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                     Examinee Name 
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Give Marks</span>
                      </button>
                    </th>

                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                 {
                    pendingassignments.map(pen=>(
                        <tr key={pen._id}>
                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                         {pen.title}
                        </td>
    
                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                          {pen.marks}
                        </td>
    
                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                          {pen.name}
                        </td>
                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                          <div className='flex items-center gap-x-2' >
                            {user.email === pen.maker_email &&(
                              <p
                              className='px-3 py-1 rounded-full 
                               text-xs'
                               
                            >
                             <Link to={`/marks/${pen._id}`} ><button  className="btn " >Give Marks</button></Link>
                            </p>
                            )}
                            
                          </div>
                        </td>
                      </tr>
                    ))
                 }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default PendingAssignments;