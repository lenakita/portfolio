import Image from "next/image"
// static content imports
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";

export default function skills() {
    return (
        <div>
            <div>
                <h3 className="text-3xl py-1">Skills I offer</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-200">
                <em>Scripting, AWS and random facts of the day </em>😊
                </p>
            </div>
            <div className="lg:flex gap-10">
                <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image alt="design" className="" src={design}></Image>
                <h3 className="text-lg font-medium pt-8 pb-2">Tools</h3>
                <p>
                    Tools go here
                </p>
                {/* TODO: insert urls for tools/languages etc. */}
                <h4 className="py-4 text-teal-600 dark:text-teal-200">Tools I use</h4>
                <p className="text-gray-800 dark:text-white py-1">AWS</p>
                <p className="text-gray-800 dark:text-white py-1">Git</p>
                <p className="text-gray-800 dark:text-white py-1">Atlassian Suite</p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image alt="code"  src={code}></Image>
                <h3 className="text-lg font-medium pt-8 pb-2">Languages</h3>
                <p>
                    Languages go here
                </p>
                <h4 className="py-4 text-teal-600 dark:text-teal-200">Languages that I use</h4>
                <p className="text-gray-800 dark:text-white py-1">Python</p>
                <p className="text-gray-800 dark:text-white py-1">Terraform</p>
                <p className="text-gray-800 dark:text-white py-1">Bash</p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image alt="consulting"  src={consulting}></Image>
                <h3 className="text-lg font-medium pt-8 pb-2">Qualifications</h3>
                <p>
                    Qualification go here
                </p>
                <h4 className="py-4 text-teal-600 dark:text-teal-200">Tools I use</h4>
                <p className="text-gray-800 dark:text-white py-1">Qualification one</p>
                <p className="text-gray-800 dark:text-white py-1">Qualification two</p>
                <p className="text-gray-800 dark:text-white py-1">Qualification three</p>
                </div>
            </div>
        </div>
    )
}