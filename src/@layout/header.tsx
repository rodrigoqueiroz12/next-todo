import Image from 'next/image'

import logo from '../../public/logo.svg'

export default function Header() {
  return (
    <header className="relative h-[12.5rem] bg-gray-700">
      <Image
        priority
        src={logo}
        width={126}
        height={48}
        alt=""
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </header>
  )
}
