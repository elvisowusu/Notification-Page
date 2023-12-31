import { useState } from 'react'
import angela from './assets/avatar-angela-gray.webp'
import anna from './assets/avatar-anna-kim.webp'
import jacob from './assets/avatar-jacob-thompson.webp'
import kimberly from './assets/avatar-kimberly-smith.webp'
import chessImg from './assets/image-chess.webp'
import mark from './assets/avatar-mark-webber.webp'
import nathan from './assets/avatar-nathan-peterson.webp'
import rizky from './assets/avatar-rizky-hasanuddin.webp'
import {GoDotFill} from 'react-icons/go'
import './App.css'

function App() {
  const [newMessage,setNewMessage] = useState(3);
  const [clear, setClear] = useState(false);
  const [show,setShow] = useState(false)
  const handleClicked=()=>{
    setNewMessage(0);
    setClear(true);
  }
  const read =(index)=>{
    setShow({...show, [index]:true});
    setNewMessage(newMessage-1);
  }

  return (
    <div className='font-PlusJakartaSans flex flex-col justify-center items-center bg-Verylightgrayishblue sm:h-[110vh] md:h-[115vh]'>
      <div className='bg-white px-5 pt-5 md:px-6 md:pt-9 sm:w-[40rem] rounded-2xl'>
        <div className='flex justify-between items-center mb-5 md:mb-7'>
          <div className='flex gap-2'>
            <p className='font-semibold text-[1.3rem] text-Verydarkblue cursor-pointer'>Notifications</p>
            <p className='text-[1rem] font-extrabold text-White bg-Blue rounded-md px-3 items-center flex h-7 cursor-pointer'>{newMessage}</p>
          </div>
          <button onClick={handleClicked} className='text-Grayishblue bg-White hover:text-Blue transition ease-in duration-150'>Mark all as read</button>
        </div>

        <div onClick={()=>read(0)} className={`${clear || show[0]?'':'bg-Verylightgrayishblue'} p-3 rounded-lg flex mb-3 md:mb-1 cursor-pointer`}>
          <img className='h-[2.8rem] cursor-pointer' src={mark} alt="Mark's image" />
          <div className='ml-3 text-[0.9rem]'>
            <p className='text-Grayishblue'><span className='font-semibold text-Verydarkblue hover:text-Blue cursor-pointer transition ease-in duration-150'>Mark Webber</span> reacted to your recent post <span className='font-semibold text-Darkgrayishblue hover:text-Blue cursor-pointer transition ease-in duration-150'>My first tournament today!<GoDotFill className={`inline ${clear || show[0]?'text-White':'text-Red'}  h-4 w-4`}/></span></p>
            <p className='text-Grayishblue'>1m ago</p>
          </div>
        </div>

        <div onClick={()=>read(1)} className={`${clear || show[1]?'':'bg-Verylightgrayishblue'} p-3 rounded-lg flex mb-3 md:mb-1 cursor-pointer`}>
          <img className='h-[2.8rem] cursor-pointer' src={angela} alt="Angela's image" />
          <div className='ml-3 text-[0.9rem]'>
            <p className='text-Grayishblue'><span className='font-semibold text-Verydarkblue hover:text-Blue cursor-pointer transition ease-in duration-150'>Angela Gray</span> followed you<GoDotFill className={`inline ${clear || show[1]?'text-White':'text-Red'}  h-4 w-4`}/></p>
            <p className='text-Grayishblue'>5m ago</p>
          </div>
        </div>

        <div onClick={()=>read(2)} className={`${clear || show[2]?'':'bg-Verylightgrayishblue'} p-3 rounded-lg flex mb-3 md:mb-1 cursor-pointer`}>
          <img className='h-[2.8rem] cursor-pointer' src={jacob} alt="Jacob's image" />
          <div className='ml-3 text-[0.9rem]'>
            <p className='text-Grayishblue'><span className='font-semibold text-Verydarkblue hover:text-Blue cursor-pointer transition ease-in duration-150'>Jacob Thompson</span> has joined your group <span className='font-semibold text-Blue cursor-pointer transition ease-in duration-150'>Chess Club</span><GoDotFill className={`inline ${clear || show[2]?'text-White':'text-Red'}  h-4 w-4`}/></p>
            <p className='text-Grayishblue'>1 day ago</p>
          </div>
        </div>

        <div className=' p-3 rounded-lg flex mb-3 md:mb-1'>
          <img className='h-[2.8rem] cursor-pointer' src={rizky} alt="Rizky's image" />
          <div className='ml-3 text-[0.9rem]'>
            <p className='text-Grayishblue'><span className='font-semibold text-Verydarkblue hover:text-Blue cursor-pointer transition ease-in duration-150'>Rizky Hasanuddin</span> sent you a private message</p>
            <p className='text-Grayishblue'>5 days ago</p>
            <p className='text-Grayishblue border p-4 rounded-md mt-4 outline-none border-Lightgrayishblue2 hover:border-Verylightgrayishblue cursor-pointer hover:bg-Verylightgrayishblue transition ease-in duration-150'>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>
          </div>
        </div>

        <div className=' p-3 rounded-lg flex justify-between mb-3 md:mb-1'>
          <div className='flex'>
            <img className='h-[2.8rem] cursor-pointer' src={kimberly} alt="Kimberly's image" />
            <div className='ml-3 text-[0.9rem]'>
              <p className='text-Grayishblue'><span className='font-semibold text-Verydarkblue hover:text-Blue cursor-pointer transition ease-in duration-150'>Kimberly Smith</span> commented on your picture</p>
              <p className='text-Grayishblue'>1 week ago</p>
            </div>
          </div>
          <img className='h-[2.8rem] ml-2 cursor-pointer' src={chessImg} alt="chess image" />
        </div>

        <div className=' p-3 rounded-lg flex mb-4 sm:mb-0'>
          <img className='h-[2.8rem] cursor-pointer' src={nathan} alt="Nathan's image" />
          <div className='ml-3 text-[0.9rem]'>
            <p className='text-Grayishblue'><span className='font-semibold text-Verydarkblue hover:text-Blue cursor-pointer transition ease-in duration-150'>Nathan Peterson</span> reacted to your recent post <span className='font-semibold text-Darkgrayishblue hover:text-Blue cursor-pointer transition ease-in duration-150'>5 end-game strategies to increase your win rate</span></p>
            <p className='text-Grayishblue'>2 weeks ago</p>
          </div>
        </div>

        <div className=' p-3 rounded-lg flex mb-10 sm:mb-0'>
          <img className='h-[2.8rem] cursor-pointer' src={anna} alt="Anna's image" />
          <div className='ml-3 text-[0.9rem]'>
            <p className='text-Grayishblue'><span className='font-semibold text-Verydarkblue hover:text-Blue cursor-pointer transition ease-in duration-150'>Anna Kim</span> left the group <span className='font-semibold text-Blue cursor-pointer transition ease-in duration-150'>Chess Club</span></p>
            <p className='text-Grayishblue'>2 weeks ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
