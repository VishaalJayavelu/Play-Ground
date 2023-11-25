import React from 'react'
import dashboardicon from '../../assests/dashboardicon.svg'
import Avatar from '../../assests/avatar.svg'
import Input from '../../components/input'

const Dashboard = () => {

     const contacts =[
          {
               name:'Jhon',
               status : 'Available',
               img:Avatar,
          },
          {
               name:'Alexander',
               status : 'Available',
               img:Avatar,
          },
          {
               name:'Adam',
               status : 'Available',
               img:Avatar,
          },
          {
               name:'Alex',
               status : 'Available',
               img:Avatar,
          },
          {
               name:'Larry',
               status : 'Available',
               img:Avatar,
          }
     ]

  return (
     <div className='w-screen flex'>
          <div className='w-[25%] h-screen bg-secondary'>
               <div className='flex justify-center items-center my-8'>
                    <div className='border border-primary p-[2px] rounded-full'><img src={Avatar} width={75} height={75} alt={'Avatar'}></img></div>
                    <div className='ml-8'>
                         <h3 className='text-2xl'>Tutorials Dev</h3>
                         <p className='text-lg font-light'>My Account</p>
                    </div>
               </div>
               <hr/>
               <div>
                    <div className='flex text-primary justify-center items-center text-2xl mb-3'>Messages</div>
                    <div className='ml-5'>
                         {
                              contacts.map(({name,status,img},index)=>{
                                   return(
                                        <div key={index} >
                                             <div className='flex items-center py-4 border-b border-b-gray-300'>
                                                  <div className="cursor-pointer flex item-center">
                                                       <div><img src={img} width={60} height={60} alt={'Avatar'}></img></div>
                                                       <div className='ml-4'>
                                                            <h3 className='text-lg'>{name}</h3>
                                                            <p className='text-sm font-light text-gray-600'>{status}</p>
                                                       </div>
                                                  </div>
                                             </div>
                                             <hr/>
                                        </div>
                                   )
                              })
                         }
                    </div>
               </div>
          </div>
          <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
               <div className="w-[75%] bg-secondary h-[80px] mt-10 mb-10 rounded-full flex items-center">
                    <div className='cursor-pointer ml-7'><img src={Avatar} width={60} height={60} alt={'Avatar'}/></div>
                    <div className='ml-6 mr-auto'>
                         <h3 className='text-lg'>Alexander</h3>
                         <p className='text-sm font-light text-gray-600'>Online</p>
                    </div>
                    <div className='flex felx-col ml-auto mr-4'>
                         <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 cursor-pointer icon icon-tabler icon-tabler-phone-outgoing " width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 9l5 -5" /><path d="M16 4l4 0l0 4" /></svg>
                         <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-phone-outgoing " width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 9l5 -5" /><path d="M16 4l4 0l0 4" /></svg>
                    </div>
               </div>
               <div className='h-[75%] w-full overflow-scroll border-b'>
                    <div className='h-[auto] px-10 '>
                         <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl mb-4 p-4'>
                              lorem ipsum dolor sit amet, consectetur adip <br/>   lorem ipsum dolor sit amet, consectetur adip
                         </div>
                         <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl mb-4 p-4 ml-auto text-right text-light'>
                              lorem ipsum dolor sit amet,
                         </div>
                         <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl mb-4 p-4'>
                              lorem ipsum dolor sit amet, consectetur adip <br/>   lorem ipsum dolor sit amet, consectetur adip
                         </div>
                         <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl mb-4 p-4 ml-auto text-right text-light'>
                              lorem ipsum dolor sit amet,
                         </div>
                         <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl mb-4 p-4'>
                              lorem ipsum dolor sit amet, consectetur adip <br/>   lorem ipsum dolor sit amet, consectetur adip
                         </div>
                         <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl mb-4 p-4 ml-auto text-right text-light'>
                              lorem ipsum dolor sit amet,
                         </div>
                         <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl mb-4 p-4'>
                              lorem ipsum dolor sit amet, consectetur adip <br/>   lorem ipsum dolor sit amet, consectetur adip
                         </div>
                         <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl mb-4 p-4 ml-auto text-right text-light'>
                              lorem ipsum dolor sit amet,
                         </div>
                         <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl mb-4 p-4'>
                              lorem ipsum dolor sit amet, consectetur adip <br/>   lorem ipsum dolor sit amet, consectetur adip
                         </div>
                         <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl mb-4 p-4 ml-auto text-right text-light'>
                              lorem ipsum dolor sit amet,
                         </div>
                         <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl mb-4 p-4'>
                              lorem ipsum dolor sit amet, consectetur adip <br/>   lorem ipsum dolor sit amet, consectetur adip
                         </div>
                         <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl mb-4 p-4 ml-auto text-right text-light'>
                              lorem ipsum dolor sit amet,
                         </div>
                    </div>
               </div>
               <div className='w-full p-4 flex items-center justify-center'>
                    <Input placeholder='Type a message..' className='w-[90%]' inputClassName='p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none rounded-full'/>                    
                    <div className='ml-4 cursor-pointer bg-light rounded-full'>
                         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>
                    </div>
                    <div className='ml-4 cursor-pointer bg-light rounded-full'>
                         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                    </div>
               </div>
          </div>
          <div className='w-[25%] h-screen'></div>
     </div>
  )
}

export default Dashboard