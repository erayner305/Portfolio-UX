import Section from "../components/Section";
import Tile from "../components/Tile";
import "./App.css";

function App() {
	return (
		<>
			<div className="flex flex-col justify-center  gap-3 w-11/12 min-w-[360px] max-w-7xl h-fit px-5">
				<Section className={"grid-cols-[10fr_1fr] px-6 pt-3 text-antiflash-white"}>
					<div className="font-merriweather-italic text-2xl">Easton Rayner</div>
					<div className=" justify-self-end">ICONS</div>
				</Section>
				<div className="bg-antiflash-white rounded-4xl p-3">
					<Section
						className={
							"lg:grid-cols-[auto_minmax(50%,_1fr)] sm:grid-cols-[1fr]"
						}
					>
						<Tile
							className={
								`aspect-square max-h-72 justify-self-center self-center p-2`
							}
						>
							<img src="/public/profile_pic.png" alt="Easton Rayner" className="rounded-4xl" />
						</Tile>
						<Tile className={"flex flex-col gap-2 p-6"}>
							<div className="font-merriweather-italic text-4xl">
								Hi, I'm Easton
							</div>
							<div className="">
								<span className="font-space-grotesk">SOFTWARE ENGINEER</span> |{" "}
								<span className="font-merriweather-italic">UX DESIGNER</span>
							</div>
							<div className="font-inter">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
								commodo ligula eget dolor. Aenean massa. Cum sociis natoque
								penatibus et magnis dis parturient montes, nascetur ridiculus
								mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
								quis, sem. Nulla consequat massa quis enim. Donec pede justo,
								fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
								rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
								felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
								
							</div>
						</Tile>
					</Section>
				</div>

				<div className="section" id="projects"></div>
			</div>
		</>
	);
}

export default App;
