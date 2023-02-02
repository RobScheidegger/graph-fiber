import * as x from "./scripts/graph.json";
import { GraphSchema } from "./scripts/schema";

function App() {
    console.log(GraphSchema.safeParse(x));

    return <pre className="whitespace-pre-wrap">{JSON.stringify(x)}</pre>;
}

export default App;
