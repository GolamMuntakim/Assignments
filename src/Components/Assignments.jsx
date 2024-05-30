
import { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Assignments = () => {
    const [pages, setPage] = useState(3)
    const [count, setCount] = useState(0)
    const pagenumber = Math.ceil(count/pages)
    const pageButton = [...Array(pagenumber).keys()].map(item => item + 1)
    const [currentPage, setCurrentPage] = useState(1)
    const [assignments, setAssignments] = useState([])
    const [filter, setFilter] = useState(' ')
    const [search, setSearch] = useState('')
    // console.log(assignments)
    const {user} = useContext(AuthContext)
    // console.log(user)
    console.log(assignments)

    useEffect(()=>{
        getData()
    },[currentPage,pages,filter,search])

    const getData = async () =>{
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/all-assignments?page=${currentPage}&size=${pages}&filter=${filter.trim()}&search=${search}`)
        setAssignments(data)
        
    }
    // second
    useEffect(()=>{
        getCount()
    },[filter,search])

    const getCount = async () =>{
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/assignments-count?filter=${filter}&search=${search}`)
        setCount(data.count)
    }

    const handleDelete= async (id, makerEmail) =>{
        try{
            if(user.email !== makerEmail){
                return toast.error("sorry!only maker can delete it")
            }
            const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteassignment/${id}`)
            // console.log(data)
            toast.success('Deleted Succesfully')
            getData()
        }catch(err){
            // console.log(err.message)
            toast.error(err.message)
        }
    }
   
    const handlePagination =(v)=>{
        // console.log(v)
        setCurrentPage(v)
    }
    const handleSearch=e=>{
      e.preventDefault()
      const text = e.target.search.value
      setSearch(text)
      
    }
    // console.log(search)
    return (
        <div className='w-[350px] md:w-[400px] lg:w-[1260px]  mx-auto'>
          <Helmet>
            <title>
              Assignment
            </title>
          </Helmet>
             
             <div className='flex items-center justify-center gap-4'>
             <div className="">
            <select
              name='category'
              id='category'
              value={filter}
              onChange={e=> setFilter(e.target.value.trim())}
              className='border-none mt-8  p-4 rounded-lg'
            >
              <option value=''>Sort By Difficulty level</option>
              <option value='Easy'>Easy</option>
              <option value='Medium'>Medium</option>
              <option value='Hard'>Hard</option>
            </select>
          </div>
          <div>
            
          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 mt-6'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          </div>
             </div>

                {/*  */}

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 w-[350px] md:w-[400px] lg:w-[1260px] mx-auto'>
        {
            assignments.map(assignment=> (
                <div key={assignment._id} className="card w-[350px] lg:w-96 bg-base-100 shadow-xl transition duration-300 ease-in-out hover:scale-110">
<figure><img className='h-[200px] w-full' src={assignment.thumbnail_image_url} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">{assignment.title}</h2>
<p><span className='font-bold'>Deadline</span>: {new Date(assignment.due_date).toLocaleDateString() }</p>
<p><span className='font-bold'>Marks</span>: {assignment.marks}</p>
<p><span className='font-bold'>Difficulty</span>: {assignment.difficulty_level}</p>
<p><span className='font-bold'>Description</span>:{assignment.description}</p>
<div className="card-actions justify-center">
        <button onClick={()=>handleDelete(assignment._id, assignment.maker.email)} className="btn bg-red-800 text-white">Delete</button>
        <Link to={`/updateassignments/${assignment._id}`}><button className="btn bg-green-800 text-white">Update</button></Link>
  <Link to={`/viewassignmengts/${assignment._id}`}><button className="btn bg-black text-white">View Assignments</button></Link>
</div>
</div>
</div>
            ))
        }
    </div>
    {/* pagination */}
    <div className='flex justify-center w-[350px] md:w-[400px] lg:w-[1260px] mt-12'>
        <button
        disabled={currentPage===1}
        onClick={()=>handlePagination(currentPage-1)}
         className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
          <div className='flex items-center -mx-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 16l-4-4m0 0l4-4m-4 4h18'
              />
            </svg>

            <span className='mx-1'>previous</span>
          </div>
        </button>

        {pageButton.map(btnNum => (
          <button
            key={btnNum}
            onClick={()=>handlePagination(btnNum)}
            className={`${currentPage === btnNum? 'bg-black text-white' : ''} hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        <button 
         disabled={currentPage===pagenumber}
        onClick={()=>handlePagination(currentPage+1)}
        className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
          <div className='flex items-center -mx-1'>
            <span className='mx-1'>Next</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </div>
        </button>
      </div>
        </div>
    );
};

export default Assignments;