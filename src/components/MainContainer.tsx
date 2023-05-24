import {ReactNode} from 'react'

interface Props {
    children: ReactNode
}

function MainContainer({children}: Props) {
  return (
    <div className='full-height bg-main-gradient d-flex flex-column justify-content-between'>
        {children}
    </div>
  )
}

export default MainContainer