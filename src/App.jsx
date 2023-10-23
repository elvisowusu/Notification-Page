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

  return (
    <div className='font-PlusJakartaSans flex flex-col justify-center items-center bg-Verylightgrayishblue'>
      <div className='bg-white px-5 pt-5'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-[1.3rem] text-Verydarkblue'>Notifications</p>
          <p className='text-Grayishblue hover:text-Blue'>Mark all as read</p>
        </div>
        <div className='bg-Verylightgrayishblue p-3 rounded-lg flex'>
          <img className='h-[2.8rem]' src={mark} alt="Mark's image" />
          <div className='ml-3 text-[0.9rem]'>
            <p className='text-Grayishblue'><span className='font-semibold text-Verydarkblue hover:text-Blue'>Mark Webber</span> reacted to your recent post <span className='font-semibold text-Darkgrayishblue hover:text-Blue'>My first tournament today!<GoDotFill className='inline text-Red'/></span></p>
            <p className='text-Lightgrayishblue2'>1m ago</p>
          </div>
        </div>
        <div>
          <img src={angela} alt="Angela's image" />
          <div>
            <p><span>Angela Gray</span> followed you<GoDotFill/></p>
            <p>5m ago</p>
          </div>
        </div>
        <div>
          <img src={jacob} alt="Jacob's image" />
          <div>
            <p><span>Jacob Thompson</span> has joined your group <span>Chess Club</span><GoDotFill/></p>
            <p>1 day ago</p>
          </div>
        </div>
        <div>
          <img src={rizky} alt="Rizky's image" />
          <div>
            <p><span>Rizky Hasanuddin</span> sent you a private message</p>
            <p>5days ago</p>
            <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game</p>
          </div>
        </div>
        <div>
          <img src={kimberly} alt="Kimberly's image" />
          <div>
            <p><span>Kimberly Smith</span> commented on your picture</p>
            <p>1 week ago</p>
          </div>
          <img src={chessImg} alt="chess image" />
        </div>
        <div>
          <img src={nathan} alt="Nathan's image" />
          <div>
            <p><span>Nathan Peterson</span> reacted to your recent post <span>5 end-game strategies to increase your win rate</span></p>
            <p>2 weeks ago</p>
          </div>
        </div>
        <div>
          <img src={anna} alt="Anna's image" />
          <div>
            <p><span>Anna Kim</span> left the group <span>Chess Club</span></p>
            <p>2 weeks ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
