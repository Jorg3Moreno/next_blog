import Image from "next/image"
import Link from "next/link"

import Author from "./author"

export default function Related() {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">
        Related
      </h1>
      <div className="flex flex-col gap-10">
        { Posts() }
        { Posts() }
        { Posts() }
        { Posts() }
      </div>
    </section>
  )
}

function Posts() {
  return(
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            src={"/images/img1.jpg"}
            width={300}
            height={250}
            alt={"image blog description"}
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            Business, Travel&nbsp;
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            - July 02, 2022
          </Link>
        </div>
        <div className="title">
          <Link href={"/"} className="text-xl font-bold text-gray-800 hover:text-gray-600">
            Your most unhappy customers are your greatest source of learning 
          </Link>
        </div>
        <Author />
      </div>
    </div>
  )
}
