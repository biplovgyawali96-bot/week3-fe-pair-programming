import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Nav = () => {
  return (
    <>
      <PageLinks parentClass='nav-links' itemClass='nav-link' />
      <SocialLinks parentClass='nav-icons' itemClass='nav-icon' />
    </>
  )
}

export default Nav