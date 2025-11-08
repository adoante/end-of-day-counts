
import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { Button } from './components/ui/button'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ItemCardFloat } from './components/item-card-float'
import { ItemCardInteger } from './components/item-card-integer'
import { ItemCardIntegerFloat } from './components/item-card-float-integer'
import { ItemCardIntegerIntegerFloat } from './components/item-card-float-integer-integer'
import { ItemCardIntegerIntegerIntegerFloat } from './components/item-card-float-integer-integer-integer'
import { ItemCardIntegerInteger } from './components/item-card-integer-integer'
import { ItemcardsTable } from "./components/item-card-table"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

function App() {
	function clearAllItemCardData() {
		Object.keys(localStorage).forEach((key) => {
			if (key.startsWith("itemcard_")) {
				localStorage.removeItem(key);
			}
		});
		window.location.reload();
	}

	const items = [
		"Beef Patty 6oz",
		"Chili",
		"Beef Patty 3_2oz",
		"Beef Patty 1_6oz Slider",
		"Plant Based Patty 4oz",
		"Flattened Chicken",
		"Fried Chicken",
		"Chicken Breast Chunk",
		"Ground Turkey",
		"Carnitas",
		"Baja Chicken",
		"Chicken Tiki",
		"Chicken Wings",
		"Island Fish",
		"Garden Burger",
		"Chicken Soup",
		"Brownie",
		"Kona Pie",
		"Butter Cake",
	];

	// helper for safe id
	const toId = (name: string) =>
		name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<nav className="flex flex-row items-center justify-between sticky top-0 bg-background/80 backdrop-blur-md z-50 py-5 px-5">

				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Items</NavigationMenuTrigger>
							<NavigationMenuContent
								className="text-left min-w-sm"
							>
								<ul className="grid gap-2">
									{items.map((title) => (
										<li key={title}>
											<NavigationMenuLink asChild>
												<Button
													variant="secondary"
													asChild
													className="w-full"
												>
													<a href={`#${toId(title)}`}>{title}</a>
												</Button>
											</NavigationMenuLink>
										</li>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>

				<ModeToggle />
			</nav>

			<main className="space-y-5 mx-5">
				{/* each card wrapped in its own div with id */}
				<div id={toId("Beef Patty 6oz")} className="scroll-mt-24">
					<ItemCardIntegerIntegerFloat
						title="Beef Patty 6oz"
						desc=""
						weightUnit="lbs"
						countUnit="case"
						countUnit2="patty"
					/>
				</div>

				<div id={toId("Chili")} className="scroll-mt-24">
					<ItemCardFloat
						title="Chili"
						desc=""
						weightUnit="lbs"
					/>
				</div>

				<div id={toId("Beef Patty 3_2oz")} className="scroll-mt-24">
					<ItemCardIntegerIntegerFloat
						title="Beef Patty 3_2oz"
						desc=""
						weightUnit="lbs"
						countUnit="case"
						countUnit2="ea"
					/>
				</div>

				<div id={toId("Beef Patty 1_6oz Slider")} className="scroll-mt-24">
					<ItemCardIntegerIntegerFloat
						title="Beef Patty 1_6oz Slider"
						desc=""
						weightUnit="lbs"
						countUnit="case"
						countUnit2="ea"
					/>
				</div>

				<div id={toId("Plant Based Patty 4oz")} className="scroll-mt-24">
					<ItemCardIntegerIntegerFloat
						title="Plant Based Patty 4oz"
						desc=""
						weightUnit="lbs"
						countUnit="case"
						countUnit2="ea"
					/>
				</div>

				<div id={toId("Flattened Chicken")} className="scroll-mt-24">
					<ItemCardIntegerIntegerIntegerFloat
						title="Flattened Chicken"
						desc=""
						weightUnit="lbs"
						countUnit="case"
						countUnit2="ea"
						countUnit3="4oz"
					/>
				</div>

				<div id={toId("Fried Chicken")} className="scroll-mt-24">
					<ItemCardInteger
						title="Fried Chicken"
						desc=""
						countUnit="ea"
					/>
				</div>

				<div id={toId("Chicken Breast Chunk")} className="scroll-mt-24">
					<ItemCardIntegerIntegerFloat
						title="Chicken Breast Chunk"
						desc=""
						weightUnit="lbs"
						countUnit="case"
						countUnit2="spicy"
					/>
				</div>

				<div id={toId("Ground Turkey")} className="scroll-mt-24">
					<ItemCardIntegerIntegerFloat
						title="Ground Turkey"
						desc=""
						weightUnit="lbs"
						countUnit="case"
						countUnit2="chubs"
					/>
				</div>

				<div id={toId("Carnitas")} className="scroll-mt-24">
					<ItemCardIntegerIntegerFloat
						title="Carnitas"
						desc=""
						weightUnit="lbs"
						countUnit="case"
						countUnit2="bags"
					/>
				</div>

				<div id={toId("Baja Chicken")} className="scroll-mt-24">
					<ItemCardIntegerIntegerFloat
						title="Baja Chicken"
						desc=""
						weightUnit="lbs"
						countUnit="case"
						countUnit2="bags"
					/>
				</div>

				<div id={toId("Chicken Tiki")} className="scroll-mt-24">
					<ItemCardIntegerFloat
						title="Chicken Tiki"
						desc=""
						weightUnit="lbs"
						countUnit="case"
					/>
				</div>

				<div id={toId("Chicken Wings")} className="scroll-mt-24">
					<ItemCardIntegerIntegerIntegerFloat
						title="Chicken Wings"
						desc=""
						weightUnit="lbs"
						countUnit="case"
						countUnit2="bags"
						countUnit3="small order"
					/>
				</div>

				<div id={toId("Island Fish")} className="scroll-mt-24">
					<ItemCardIntegerFloat
						title="Island Fish"
						desc=""
						weightUnit="lbs"
						countUnit="case"
					/>
				</div>

				<div id={toId("Garden Burger")} className="scroll-mt-24">
					<ItemCardIntegerIntegerFloat
						title="Garden Burger"
						desc=""
						weightUnit="lbs"
						countUnit="case"
						countUnit2="ea"
					/>
				</div>

				<div id={toId("Chicken Soup")} className="scroll-mt-24">
					<ItemCardIntegerIntegerFloat
						title="Chicken Soup"
						desc=""
						weightUnit="lbs"
						countUnit="case"
						countUnit2="bag"
					/>
				</div>

				<div id={toId("Brownie")} className="scroll-mt-24">
					<ItemCardIntegerInteger
						title="Brownie"
						desc=""
						countUnit="ea"
						countUnit2="case"
					/>
				</div>

				<div id={toId("Kona Pie")} className="scroll-mt-24">
					<ItemCardIntegerInteger
						title="Kona Pie"
						desc=""
						countUnit="ea"
						countUnit2="box"
					/>
				</div>

				<div id={toId("Butter Cake")} className="scroll-mt-24">
					<ItemCardIntegerInteger
						title="Butter Cake"
						desc=""
						countUnit="ea"
						countUnit2="case"
					/>
				</div>

				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button variant="destructive">
							Clear All Counts
						</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
							<AlertDialogDescription>
								This action cannot be undone. This will permanently delete all E.O.D Counts.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<AlertDialogAction asChild>
								<Button variant="destructive" onClick={clearAllItemCardData} className="text-white">
									Delete
								</Button>
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>

				<ItemcardsTable />
			</main>
		</ThemeProvider >
	)
}

export default App
