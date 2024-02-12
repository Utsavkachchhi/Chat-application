import React from 'react'
import Input from '../../components/input'

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
           <div className='w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14 shadow-md'>
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

           <div className='h-[75%] w-full overflow-scroll shadow-sx'>
             <div className='p-14'>
               <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'> Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
               <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tr-xl ml-auto p-4 text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
               <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'> Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
               <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tr-xl ml-auto p-4 text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
               <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'> Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
               <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tr-xl ml-auto p-4 text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>

             </div>
           </div>
           <div className='p-14 w-full flex items-center'>
             <Input placeholder='Write a message...' className='w-[75%]' inputClassName='p-4 border-0 shadow-md rouned-full bg-light focus:ring-0 focus:border-0 outline-none' />
             <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
             </div>
             <div className='p-14 w-full flex items-center'>
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
             </div>
           </div>
        </div>
        

        <div className='w-[25%]   h-screen'></div>
    </div>
  )
}

export default Dashboard;