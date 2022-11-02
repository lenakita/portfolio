import randomFacts from "./../data/randomfacts.json"

export default function randomFact() {
    var factParts = generateRandomFact();
    return (
        <div>
            <b><em>Fact</em></b>: {factParts["Fact"]}
            <br></br>
            <b><em>Description</em></b>: {factParts["Description"]}
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