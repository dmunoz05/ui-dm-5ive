import '../header/header.css'
import Link from 'next/link'
import IconGithub from '@ui-dm-5ive/assets/icons/iconGithub'

export default function Header() {
  return (
    <div id='header-container' className='w-full z-10 '>
      <div className='header-title'>
        <a href='/'>UI dm-5ive</a>
      </div>
      <ul>
        <li>
          <Link href="/documentation">Docs</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
      </ul>
      <span id='header-divider'>
        |
      </span>
      <div className='header-contribute'>
        <a href="https://github.com/dmunoz05/ui-dm-five" target='__blank'>
          <IconGithub />
        </a>
      </div>
    </div>
  )
}
