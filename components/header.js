import Image from "next/image"
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";

import pfp from "../public/pfp.jpg";

export default function header() {
    return (
        <div>
            <div className="text-center p-10">
                <h2 className="text-4xl py-2 text-teal-500 font-medium md:text-6xl">Elena Thomas</h2>
                <h3 className="text-2xl py-2 md:text-3xl">DevSecOps Engineer</h3>
                <h5 className="text-md py-2">
                <em>
                    <span className="text-teal-500">
                    <a href="https://www.stonewall.org.uk/about-us/news/international-pronouns-day">Pronouns</a>
                    </span>
                    : she/her and they/them
                </em>
                </h5>
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-slate-200">
                DevSecOps engineer with a background in embedded, automotive, software who now works in the Editorial industry.
                Always learning about new tools, techniques and languages.
                </p>
            </div>
            <div className="text-4xl flex justify-center gap-8 py-3 text-teal-600 md:scale-125">
                <a href="https://twitter.com/fyrngarm">
                <AiFillTwitterCircle className="cursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/elena-thomas-643397211/">
                <AiFillLinkedin className="cursor-pointer"/>
                </a>
                <a href="https://github.com/lenakita">
                <AiFillGithub className="cursor-pointer"/>
                </a>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
                <Image alt="Elena Thomas profile picture" src={pfp} layout="fill" objectFit="cover"/>
            </div>
        </div>
    )
}