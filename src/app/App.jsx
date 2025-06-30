import Section from "../components/Section";
import Tile from "../components/Tile";
import "./App.css";

function App() {
	return (
		<>
			<div className="flex flex-col justify-center gap-3 w-11/12 min-w-[380px] max-w-7xl h-fit px-5">
				<div className=""></div>
				<Section className={"lg:grid-cols-3 md:grid-cols-2"}>
					<Tile></Tile>
					<Tile className={"lg:col-span-2"}></Tile>
				</Section>
				<div className="section" id="projects"></div>
			</div>
		</>
	);
}

export default App;
