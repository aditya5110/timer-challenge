import { forwardRef } from "react"

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
  return (
    <dialog ref={ref} className='result-modal'>
        <h2>Your {result}</h2>
        <p>The target time was: <strong>{targetTime}.</strong></p>
        <form method='dialog'>
            <button>Close</button>
        </form>
    </dialog>
  )
})

export default ResultModal
