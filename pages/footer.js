import {
    AiFillGithub,
    AiOutlineUnorderedList
} from "react-icons/ai";
import {
    SiTailwindcss
} from "react-icons/si";
import {
    TbBrandNextjs
} from "react-icons/tb"

export default function footer() {
    return(
        <div className="pb-5">
            <footer class="p-4 md:p-6 bg-slate-100 rounded-lg dark:bg-gray-800">
                <p className="pl-2 md:pl-16 text-md md:text-lg text-slate-800 dark:text-slate-200">Resources used</p>
                <ul class="pl-2 md:pl-20 flex flex-col space-y-1 items-left mt-3 text-sm md:text-md text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li className="inline-flex">
                        <div className="pt-1 text-yellow-500 dark:text-yellow-200">
                            <TbBrandNextjs/>
                        </div>
                        &nbsp;&nbsp;
                        <a className="hover:underline text-slate-800 dark:text-slate-200" href="https://nextjs.org/">Next.js</a>
                    </li>
                    <li className="inline-flex">
                        <div className="pt-1 text-teal-700 dark:text-teal-200">
                            <SiTailwindcss/>
                        </div>
                        &nbsp;&nbsp;
                        <a className="hover:underline text-slate-800 dark:text-slate-200" href="https://tailwindcss.com">Tailwind CSS</a>
                    </li>
                    <li className="inline-flex">
                        <div className="pt-1 text-black dark:text-slate-50">
                            <AiFillGithub/>
                        </div>
                        &nbsp;&nbsp;
                        <a className="hover:underline text-slate-800 dark:text-slate-200" href="https://github.com/lenakita/portfolio-website">GitHub</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}