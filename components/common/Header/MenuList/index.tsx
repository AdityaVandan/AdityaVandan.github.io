import React from 'react'
import Link from 'next/link';
import { HEADER_CONFIG } from 'utils/constants';

const MenuList = (props:Props) => {
  return (
    <div className="ml71ContainerDiv">
      {HEADER_CONFIG?.map((headerElement, index)=>(
        <Link
        key={headerElement?.id+index} 
        href={headerElement?.id}
        >
          <a className="h34HeaderItem ml71HeaderElement">
            {headerElement?.title}
          </a>
        </Link>
      ))}
    </div>
  )
}

type Props = {

}

export default MenuList;
