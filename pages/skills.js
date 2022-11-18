import {
    IoLogoPython,
    IoLogoJavascript
} from "react-icons/io"
import {
    SiAmazonaws,
    SiConfluence,
    SiDocker,
    SiElastic,
    SiGit,
    SiGo,
    SiIbm,
    SiJira,
    SiMarkdown,
    SiNewrelic,
    SiOpsgenie,
    SiTerraform
} from "react-icons/si"
import {
    VscTerminalBash
} from "react-icons/vsc"


export default function skills() {
    return (
        <div>
            <div>
                <h3 className="text-3xl py-1 text-center">Skills I offer</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-200">
                <div className="text-center">
                    <em>Scripting, DevSecOps know-how and random facts of the day </em>😊
                </div>
                </p>
            </div>
            <div className="lg:flex gap-10 justify-center">
                <div className="justify-center text-center border-2 border-gray-100 dark:border-slate-500 shadow-lg px-10 pb-10 rounded-xl my-10">
                    <h3 className="text-lg font-semibold pt-8 pb-2">Tools</h3>
                    {/* TODO: insert urls for tools/languages etc. */}
                    <div className="grid grid-cols-1 sm:max-lg:grid-cols-3">
                        <div>
                            <h4 className="font-semibold text-teal-600 dark:text-teal-200">Containerisation</h4>
                            <div className="inline-flex">
                                <p>Docker &nbsp;</p>
                                <div className="text-blue-600 dark:text-blue-300 pt-1.5">
                                    <SiDocker></SiDocker>
                                </div>
                            </div>
                            <br></br>
                            <div className="inline-flex">
                                <p>Elastic Container Service &nbsp;</p>
                                <div className="text-orange-700 dark:text-orange-200 pt-1.5">
                                    <SiElastic></SiElastic>
                                </div>
                            </div>
                        </div>
                        <div className="lg:pt-5">
                            <div className="lg:pt-5">
                            <h4 className="font-semibold text-teal-600 dark:text-teal-200">Infrastructure as Code</h4>
                            <div className="inline-flex">
                                <p>Terraform &nbsp;</p>
                                <div className="text-purple-700 dark:text-purple-300 pt-1.5">
                                    <SiTerraform></SiTerraform>
                                </div>
                            </div>
                            <br></br>
                        </div>
                            <div className="inline-flex">
                                <p>AWS CDK &nbsp;</p>
                                <div className="text-orange-400 dark:text-orange-200 pt-1.5">
                                    <SiAmazonaws></SiAmazonaws>
                                </div>
                            </div>
                        </div>
                        <div className="lg:pt-5">
                            <h4 className="font-semibold text-teal-600 dark:text-teal-200">Monitoring & Observability</h4>
                            <div className="inline-flex">
                                <p>New Relic &nbsp;</p>
                                <div className="text-teal-600 dark:text-teal-200 pt-1.5">
                                    <SiNewrelic></SiNewrelic>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center text-center border-2 border-gray-100 dark:border-slate-500 shadow-lg px-10 pb-10 rounded-xl my-10">
                    <h3 className="text-lg font-semibold pt-8 pb-2">Languages</h3>
                    {/* TODO: insert urls for tools/languages etc. */}
                    <div className="grid grid-cols-1 sm:max-lg:grid-cols-2">
                        <div>
                            <h4 className="font-semibold text-teal-600 dark:text-teal-200">Scripting</h4>
                            <div className="inline-flex">
                                <p>Python &nbsp;</p>
                                <div className="text-blue-700 dark:text-blue-200 pt-1.5">
                                    <IoLogoPython></IoLogoPython>
                                </div>
                            </div>
                            <br></br>
                            <div className="inline-flex">
                                <p>JavaScript &nbsp;</p>
                                <div className="text-yellow-500 dark:text-yellow-200 pt-1.5">
                                    <IoLogoJavascript></IoLogoJavascript>
                                </div>
                            </div>
                            <br></br>
                            <div className="inline-flex">
                                <p>GNU Bash &nbsp;</p>
                                <div className="text-red-600 dark:text-red-300 pt-1.5">
                                    <VscTerminalBash></VscTerminalBash>
                                </div>
                            </div>
                        </div>
                        <div className="lg:pt-5">
                            <h4 className="font-semibold text-teal-600 dark:text-teal-200">Compiled</h4>
                            <div className="inline-flex">
                                <p>Golang &nbsp;</p>
                                <div className="text-blue-400 dark:text-blue-200 pt-1.5">
                                    <SiGo></SiGo>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center text-center border-2 border-gray-100 dark:border-slate-500 shadow-lg px-10 pb-10 rounded-xl my-10">
                    <h3 className="text-lg font-semibold pt-8 pb-2">Versioning & Documentation</h3>
                    {/* TODO: insert urls for tools/languages etc. */}
                    <div className="grid grid-cols-1 sm:max-lg:grid-cols-3">
                        <div>
                            <h4 className="font-semibold text-teal-600 dark:text-teal-200">Version Control</h4>
                            <div className="inline-flex">
                                <p>Git &nbsp;</p>
                                <div className="text-orange-600 dark:text-orange-300 pt-1.5">
                                    <SiGit></SiGit>
                                </div>
                            </div>
                            <br></br>
                            <div className="inline-flex">
                                <p>IBM RTC &nbsp;</p>
                                <div className="text-cyan-700 dark:text-cyan-200 pt-1.5">
                                    <SiIbm></SiIbm>
                                </div>
                            </div>
                        </div>
                        <div className="lg:pt-5">
                            <div className="lg:pt-5">
                            <h4 className="font-semibold text-teal-600 dark:text-teal-200">Documentation</h4>
                            <div className="inline-flex">
                                <p>Confluence &nbsp;</p>
                                <div className="text-blue-600 dark:text-blue-300 pt-1.5">
                                    <SiConfluence></SiConfluence>
                                </div>
                            </div>
                            <br></br>
                        </div>
                            <div className="inline-flex">
                                <p>Docs as code &nbsp;</p>
                                <div className="text-black dark:text-white pt-1.5">
                                    <SiMarkdown></SiMarkdown>
                                </div>
                            </div>
                        </div>
                        <div className="lg:pt-5">
                            <h4 className="font-semibold text-teal-600 dark:text-teal-200">Work Management</h4>
                            <div className="inline-flex">
                                <p>Jira &nbsp;</p>
                                <div className="text-blue-600 dark:text-blue-200 pt-1.5">
                                    <SiJira></SiJira>
                                </div>
                            </div>
                            <br></br>
                            <div className="inline-flex">
                                <p>OpsGenie &nbsp;</p>
                                <div className="text-teal-600 dark:text-teal-200 pt-1.5">
                                    <SiOpsgenie></SiOpsgenie>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center text-center border-2 border-gray-100 dark:border-slate-500 shadow-lg px-10 pb-10 rounded-xl my-10">
                    <h3 className="text-lg font-semibold pt-8 pb-2">Qualifications</h3>
                    {/* TODO: insert urls for tools/languages etc. */}
                    <div className="grid grid-cols-1 sm:max-lg:grid-cols-3">
                        <div>
                            <h4 className="font-semibold text-teal-600 dark:text-teal-200">Cloud</h4>
                            <p>::qualification::</p>
                        </div>
                        <div className="lg:pt-5">
                            <h4 className="font-semibold text-teal-600 dark:text-teal-200">Security</h4>
                            <p>::qualification::</p>
                        </div>
                        <div className="lg:pt-5">
                            <h4 className="font-semibold text-teal-600 dark:text-teal-200">Monitoring & Observability</h4>
                            <p>::qualification::</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}