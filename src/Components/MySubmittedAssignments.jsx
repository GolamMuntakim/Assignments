import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";


const MySubmittedAssignments = () => {
  const [submitted, setSubmitted] = useState([])
  console.log(submitted)
  // const {email} = submitted || {}
    const {user,setLoading} = useContext(AuthContext)
    // console.log(user)
    useEffect(()=>{
        getData() 
    },[user])
    const getData= async()=>{
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/submit/${user?.email}`);
        setSubmitted(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching submitted assignments:", error);
        setLoading(false);
      }
    }
    

    return (
        <div>
             <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>My Submitted Assignments</h2>
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
                      <span>Assignment Status</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Assignments Marks</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                     My obtained Marks 
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                     Feedback
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                 {
                  submitted.map(submit=>(
                    <tr key={submit._id}>
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      {submit.title}
                    </td>

                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      {submit.status}
                    </td>

                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      {submit.marks ? submit.marks : 'No Marks'}
                    </td>
                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                      <div className='flex items-center gap-x-2'>
                        <p
                          className='px-3 py-1 rounded-full 
                           text-xs'
                        >
                          {submit.obtainednumber ? submit.obtainednumber : 'No marks'}
                        </p>
                      </div>
                    </td>
                    <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                      <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2'>
                        <span className=''></span>
                        <h2 className='text-sm font-normal '>{submit.feedback ? submit.feedback : 'No feedback'}</h2>
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

export default MySubmittedAssignments;