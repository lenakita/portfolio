// custom functionality
import randomFact from "../utils/randomfact.js";

export default function facts() {
    return (
        <div className="lg:flex gap-10 justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <div className="text-center md:text-lg">{randomFact()}</div>
                <br></br>
                <p className="text-center text-sm md:text-md">
                    <em>Note: This fact is randomly generated every time the page refreshes.</em>😎
                </p>
            </div>
        </div>
    )
}