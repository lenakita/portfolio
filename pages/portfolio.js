import Image from "next/image"

import discordLogo from "../public/discord_logo.png"

export default function portfolio(featureFlags) {
    return (
        <div className={featureFlags["portfolio"] ? "visible" : "hidden"}>
            <div className="text-center">
                <h3 className="text-2xl py-1">Portfolio</h3>
                <p>
                ::projects go here::
                </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="basis-1/3 flex-1 rounded-lg shadow-lg p-10 justify-center">
                    <Image
                        alt="Discord logo"
                        className="rounded-lg object-cover"
                        src={discordLogo}
                        width={50}
                        height={50}
                    />
                    <h3 className="text-lg font-medium pt-8 pb-2 mb:text-xl">Discord API Interactions</h3>
                    {/*
                        TODO: add image for each bot to show logo/example
                    */}
                    <ul>
                        <li className="text-teal-600 dark:text-teal-200">
                        <a href="https://github.com/lenakita/cookie-bot">
                            Cookie Bot
                        </a>
                        </li>
                        <li className="text-teal-600 dark:text-teal-200">
                        <a href="https://github.com/lenakita/blathers-bot">
                            Blathers Bot
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}