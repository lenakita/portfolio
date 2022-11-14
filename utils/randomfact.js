import { Disclosure } from "@headlessui/react";
import {
    VscChevronDown
} from "react-icons/vsc";

import randomFacts from "./../data/randomfacts.json"

export default function randomFact() {
    var factParts = generateRandomFact();
    return (
        <div className="w-full px-4 pt-16">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                <Disclosure>
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-sm lg:text-md">
                        <span><b>Fact: </b>{factParts["Fact"]}</span>
                        <div className="pt-0.7 px-0.2">
                            <VscChevronDown
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-purple-500`}
                            />
                        </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600">
                        <b>Reason: </b>{factParts["Description"]}
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
            </div>
        </div>
    )
}

const generateRandomFact = () => {
    const randomNumber = Math.floor(
        Math.random() * Object.keys(randomFacts["Esoteric"]).length
    );
    console.log("Arr: ", randomFacts["Esoteric"][randomNumber])
    return randomFacts["Esoteric"][randomNumber];
}