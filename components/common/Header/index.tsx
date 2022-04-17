import { useState } from "react";
import Link from "next/link";
import Menu from '@material-ui/icons/Menu';

import { HEADER_CONFIG } from "utils/constants";
import useWindowSize from "utils/hooks/useWindowSize";
import { primaryColorDark } from "utils/constants/theme";
import MenuList  from "./MenuList";

const Header = () => {

  const [ width ] = useWindowSize();

  return (
    <div className="h34HeaderContainer">
      <Link href='/'><a className="header-title h34HeaderTitle">ADITYA'S PORTFOLIO</a></Link>

      {getHeaderLinks(width)}

    </div>
  )
}

const getHeaderLinks = (width: number) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {width > 920 ? getDesktopHeader(): getMobileHeader(isMenuOpen,setIsMenuOpen)}
    </>
  )
}

const getDesktopHeader = () => {
  return (
    <div className="vertical-align-center">
      {getHeaderElementList()}
    </div>
  )
}

const getMobileHeader = (isMenuOpen: boolean, setIsMenuOpen: (isMenuOpen:boolean) => void) => {  
  
  return (
    <div style={{ marginLeft: 'auto', marginRight: 0 }}>
      <Menu htmlColor={primaryColorDark} fontSize="large" onClick={()=>setIsMenuOpen(!isMenuOpen)} />
      {isMenuOpen && <MenuList />}
    </div>
  )
}


const getHeaderElementList = () => {
  return (
    <>
      {HEADER_CONFIG?.map((headerItem, index)=>(
        <Link
          key={headerItem?.id+index} 
          href={headerItem?.id}
        >
        <a
          className="h34HeaderItem"
        >
          {headerItem?.title}
        </a>
        </Link>
      ))}
    </>
  )
}

export default Header;
