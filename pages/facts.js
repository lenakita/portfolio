// custom functionality
import randomFact from "../utils/randomfact.js";

export default function facts(featureFlags) {
    return (
        <div className={featureFlags["facts"] ? "visible" : "hidden"}>
            <div className="lg:flex gap-10 justify-center">
                <div className="text-center border-2 border-gray-100 dark:border-slate-500 shadow-lg p-10 rounded-lg my-10">
                    <div className="text-center md:text-lg">{randomFact()}</div>
                    <br></br>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-200">
                        <em>Note: This fact is randomly generated every time the page refreshes.</em>😎
                    </p>
                </div>
            </div>
        </div>
    )
}