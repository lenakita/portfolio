import randomFacts from "./../data/randomfacts.json"

export default function randomFact() {
    var factParts = generateRandomFact();
    return (
        <div className="w-full px-4 pt-16">
            <div className="mx-auto w-full max-w-md rounded-2xl p-2">
                <div className="py-2">
                    <h3 className="font-semibold md:text-xl text-teal-700 dark:text-teal-200">Fact: </h3><p className="text-sm md:text-lg">{factParts["Fact"]}</p>
                </div>
                <div className="pb-1">
                    <h3 className="font-semibold md:text-xl text-teal-700 dark:text-teal-200">Reason:</h3><p className="text-sm md:text-lg">{factParts["Description"]}</p>
                </div>
                {/* <Disclosure>
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-sm lg:text-md">
                        <span><p className="font-semibold">Fact: </p>{factParts["Fact"]}</span>
                        <div className="pt-0.7 px-0.2">
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black`}
                            />
                        </div>
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                    <Disclosure.Panel static className="px-4 pt-4 pb-2 text-sm">
                        <h3 className="font-semibold">Reason:</h3><p className="text-gray-300">{factParts["Description"]}</p>
                    </Disclosure.Panel>
                    </Transition>
                    </>
                )}
                </Disclosure> */}
            </div>
        </div>
    )
}

const generateRandomFact = () => {
    const randomNumber = Math.floor(
        Math.random() * Object.keys(randomFacts["Esoteric"]).length
    );
    return randomFacts["Esoteric"][randomNumber];
}