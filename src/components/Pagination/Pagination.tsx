//pagination 
const Pagination = () =>{
    return(
        <div className=" justify-center items-center p-10 flex">
            <nav className="isolate inline-flex rounded-md shadow-sm" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center rounded   bg-gray-800 px-2 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-20">

                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                </svg>
                </a>
                
                <a href="#" aria-current="page" className="relative z-10 inline-flex items-center   bg-gray-900  px-4 py-2 text-sm font-medium text-gray-400 focus:z-20">1</a>
                <a href="#" className="relative inline-flex items-center  bg-gray-900 px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-20">2</a>
                <a href="#" className="relative hidden items-center  bg-gray-900  px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-20 md:inline-flex">3</a>
                <a href="#" className="relative hidden items-center  bg-gray-900  px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-20 md:inline-flex">4</a>
                <a href="#" className="relative inline-flex items-center  bg-gray-900  px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-20">5</a>
                <a href="#" className="relative inline-flex items-center  bg-gray-900  px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-20">6</a>
                <a href="#" className="relative inline-flex items-center rounded-r-md  bg-gray-900  px-2 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-20">
            
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
                </a>
            </nav>
        </div>
    )
}


export default Pagination