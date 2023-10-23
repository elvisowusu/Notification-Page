import { useState } from 'react'
import angela from './assets/avatar-angela-gray.webp'
import anna from './assets/avatar-anna-kim.webp'
import jacob from './assets/avatar-jacob-thompson.webp'
import kimberly from './assets/avatar-kimberly-smith.webp'
import mark from './assets/avatar-mark-webber.webp'
import nathan from './assets/avatar-nathan-peterson.webp'
import rizky from './assets/avatar-rizky-hasanuddin.webp'
import {GoDotFill} from 'react-icons/go'
import './App.css'

function App() {

  return (
    <div className='font-PlusJakartaSans'>
      <div>
        <div className='flex justify-between'>
          <p>Notifications</p>
          <p>Mark all as read</p>
        </div>
        <div>
          <img src={mark} alt="Mark's image" />
          <div>
            <p><span>Mark Webber</span> reacted to your post <span>My first tournament today!</span><GoDotFill/></p>
            <p>1m ago</p>
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
        </div>
        
      </div>
    </div>
  )
}

export default App
