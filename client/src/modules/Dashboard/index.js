import React from 'react'

const Dashboard = () =>  {
    const contacts = [
        {
            name : 'abc',
            status : 'available',
            img: '',
        },
        {
            name : 'xyz',
            status : 'offline',
            img: '',
        },
    ]
  return (
    <div className='w-screen flex'>
        <div className='w-[25%]   h-screen bg-secondary'>
            <div className='flex items-center my-8 mx-14' >
                <div className='border border-primary p-[2px] rounded-full'><img src='' width={75} height={75}/></div>
                <div className='ml-8'>
                    <h3 className='text-2xl'>Dev</h3>
                    <p className='text-lg font-light'>My account</p>
                </div>
            </div>
            <hr/>
            <div className='mx-14 mt-10'>
                <div className='text-primary text-lg'>Messages</div>
                <div>
                  {
                    contacts?.map(({name,status,image}) => {
                        return(
                            <div className='flex items-center py-8 border-b border-b-gray-300' >
                <div className='cursor-pointer flex items-center'>
                <div ><img src='' width={60} height={60}/></div>
                <div className='ml-6'>
                    <h3 className='text-lg font-semibold'>{name}</h3>
                    <p className='text-sm font-light text-gray-600'>{status}</p>
                </div>
                </div>
            </div>
                        )
                    })
                  }
                </div>
            </div>
        </div>



        <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
           <div className='w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14'>
              <div className='cursor-pointer'><img src='' width={60} height={60}/></div>
              <div className='ml-6 mr-auto'>
                 <h3 className='text-lg'>Hulk</h3>
                 <p className='text-sm font-light text-gray-600'>online</p>
              </div>
              <div className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"/>
</svg>
              </div>
           </div>

           <div className='h-[75%]   w-full overflow-scroll'>
             <div className='p-14'>
               <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'> Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
               <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tr-xl ml-auto p-4 text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
               <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'> Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
               <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tr-xl ml-auto p-4 text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
               <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'> Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
               <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tr-xl ml-auto p-4 text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>

             </div>
           </div>
        </div>


        <div className='w-[25%]   h-screen'></div>
    </div>
  )
}

export default Dashboard;