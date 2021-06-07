import React from 'react'

const Modal = (props) => {
  let msg
  if (props.cps <= 2) {
    msg = 'Not even trying...'
  } else if (props.cps > 2 && props.cps <= 8) {
    msg = 'pog'
  } else if (props.cps > 8 && props.cps <= 13) {
    msg = 'Kinda ok'
  } else if (props.cps > 13 && props.cps <= 50) {
    msg = 'Drag click or cheating'
  } else {
    msg = "Ok that's cheating"
  }
  return (
    <div className='border-2 flex items-center flex-col bg-gray-800 p-8'>
      <h3 className='text-green-300 text-xl'>{props.cps} CPS</h3>
      <p className='text-white'>{msg}</p>
      <button
        onClick={props.close}
        className='border-white select-none my-4 p-2 text-center border-2 text-white hover:bg-green-800 transition-all'>
        Close
      </button>
    </div>
  )
}

export default Modal
