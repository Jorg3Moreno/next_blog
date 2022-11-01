import Link from "next/link";
import { SiGithub, SiHackthebox, SiTwitter } from "react-icons/si";

import Newsletter from "./_child/newsletter";

export default function footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left"
  }

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"https://github.com"}><SiGithub color="#888"/></Link>
            <Link href={"/"}><SiHackthebox color="#888"/></Link>
            <Link href={"/"}><SiTwitter color="#888"/></Link>
          </div>
          <p className="py-5 text-gray-400">Copyright ©2022 All rights reserved | This template is made with &hearts;</p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  )
}
