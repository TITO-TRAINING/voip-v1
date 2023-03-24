import * as React from 'react'
// import "./styles.scss";
import EmptyCustom from './styles'

interface Iempty {
  emptyImg: string
  children: React.ReactNode
  content: string
}
export const Empty: React.FC<Iempty> = ({ emptyImg, children, content }) => {
  return (
    <EmptyCustom>
      <div className='empty'>
        <figure>
          <img src={emptyImg} alt='' />
        </figure>
        <div className='empty__right'>
          <p className='empty__right--title'>{content}</p>
          <div className='buttons'>{children}</div>
        </div>
      </div>
    </EmptyCustom>
  )
}

export default Empty
