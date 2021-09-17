import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import Modal from '../components/Modal'
import Ripple from '../components/Ripple'

const ClickArea = styled.div`
  overflow: hidden;
  height: 320px;
  position: relative;
  top: 0px;
`

export default function Home() {
  const [playing, setPlaying] = useState(false)
  const [timer, setTimer] = useState(0)
  const [timerSetting, setTimerSetting] = useState(10)
  const [clicks, setClicks] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const clickHandler = (e) => {
    e.preventDefault()
    if (!playing) {
      setClicks(0)
      setPlaying(true)
      setTimer(Date.now())
      setTimeout(() => {
        setPlaying(false)
        setShowModal(true)
      }, timerSetting * 1000)
    }
    playing && setClicks(clicks + 1)
  }

  const closeModal = () => {
    if (Date.now() - timer >= 500 + timerSetting * 1000) {
      setShowModal(false)
    }
  }

  return (
    <>
      <Head>
        <title>cps.gg</title>
      </Head>
      <div className='bg-gray-900 h-screen w-screen'>
        <h1 className='text-green-400 text-center text-5xl'>cps.gg</h1>
        <p className='text-white text-center mt-4'>Best cps test...</p>
        <div className='w-screen h-0.5 bg-white mt-4'></div>
        <ClickArea
          onClick={(e) => clickHandler(e)}
          onContextMenu={(e) => clickHandler(e)}
          className='bg-green-900 text-white flex justify-center items-center cursor-pointer select-none text-xl border-b-2 border-t-2'>
          {`${Math.round((clicks / (Date.now() - timer)) * 100000) / 100} CPS`}
          <Ripple />
        </ClickArea>
        <footer className='text-center text-white mt-4'>
          Created by <a href='https://matyi.tech'>Matyi Kari</a>
        </footer>
        {showModal && (
          <div className='fixed left-0 top-0 w-screen h-screen flex items-center justify-center'>
            <Modal
              close={closeModal}
              cps={Math.round((clicks / timerSetting) * 100) / 100}
            />
          </div>
        )}
      </div>
    </>
  )
}
