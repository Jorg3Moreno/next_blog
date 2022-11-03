import Image from "next/image"
import Link from "next/link"

export default function author({ img }) {
  if (!img) return <></>

  return (
    <div className="author flex py-5">
      <Image
        src={img}
        width={60}
        height={60}
        alt="image author"
        className="rounded-full"
      />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"} className="font-bold text-gray-800 hover:text-gray-600">
          Jorge Moreno
        </Link>
        <span className="text-sm text-gray-500">Developer and Hacker</span>
      </div>
    </div>
  )
}
