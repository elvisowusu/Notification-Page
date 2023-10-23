import { useState } from 'react'
import angela from './assets/avatar-angela-gray.webp'
import anna from './assets/avatar-anna-kim.webp'
import jacob from './assets/avatar-jacob-thompson.webp'
import kimberly from './assets/avatar-kimberly-smith.webp'
import mark from './assets/avatar-mark-webber.webp'
import nathan from './assets/avatar-nathan-peterson.webp'
import rizky from './assets/avatar-rizky-hasanuddin.webp'
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
          <img src={mark} alt="" />
          <div>
            <p><span>Mark Webber</span> reacted to your post <span>My first tournament today!</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
