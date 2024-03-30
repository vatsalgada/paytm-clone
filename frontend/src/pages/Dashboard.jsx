import userlogo from '../assets/user.png'
import { Heading } from '../components/Heading'
import { InputBox } from '../components/InputBox'
import { Users } from '../components/User'

export function Dashboard(){
    return (
        <>
        <div className="flex justify-between">
            <div > <Heading label={"Payments App"}></Heading> </div>
            <div className=' flex p-3'>
                <div className='pr-3 font-medium'>Hello, User</div>
                <div>
                    <img src={userlogo} alt="" className='w-8 '/>
                </div>
            </div>
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='font-bold p-3'>Your Balance $5000</div>
        {/* <div className='p-3'><InputBox label={"Users"} placeholder={'Search users...'}></InputBox></div> */}
        <div className='p-2'>
        <Users></Users>
        </div>
        </>
     
      )
    
}