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

function App() {
	function clearAllItemCardData() {
		Object.keys(localStorage).forEach((key) => {
			if (key.startsWith("itemcard_")) {
				localStorage.removeItem(key);
			}
		});
		// optional: trigger re-render or notify user
		window.location.reload(); // simplest way to refresh UI
	}

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<main className="space-y-5">
				<nav className="flex flex-row items-center justify-between">
					<h1>E.O.D. Counts</h1>
					<ModeToggle />
				</nav>

				<ItemCardIntegerIntegerFloat
					title="Beef Patty 6oz"
					desc=""
					weightUnit="lbs"
					countUnit="case"
					countUnit2="patty"
				/>

				<ItemCardFloat
					title="Chili"
					desc=""
					weightUnit="lbs"
				/>

				<ItemCardIntegerIntegerFloat
					title="Beef Patty 3.2oz"
					desc=""
					weightUnit="lbs"
					countUnit="case"
					countUnit2="ea"
				/>

				<ItemCardIntegerIntegerFloat
					title="Beef Patty 1.6oz Slider"
					desc=""
					weightUnit="lbs"
					countUnit="case"
					countUnit2="ea"
				/>

				<ItemCardIntegerIntegerFloat
					title="Plant-Based Patty 4oz"
					desc=""
					weightUnit="lbs"
					countUnit="case"
					countUnit2="ea"
				/>

				<ItemCardIntegerIntegerIntegerFloat
					title="Flattened Chicken"
					desc=""
					weightUnit="lbs"
					countUnit="case"
					countUnit2="ea"
					countUnit3="4oz"
				/>

				<ItemCardInteger
					title="Fried Chicken"
					desc=""
					countUnit="ea"
				/>

				<ItemCardIntegerIntegerFloat
					title="Chicken Breast Chunk"
					desc=""
					weightUnit="lbs"
					countUnit="case"
					countUnit2="spicy"
				/>

				<ItemCardIntegerIntegerFloat
					title="Ground Turkey"
					desc=""
					weightUnit="lbs"
					countUnit="case"
					countUnit2="chubs"
				/>

				<ItemCardIntegerIntegerFloat
					title="Carnitas"
					desc=""
					weightUnit="lbs"
					countUnit="case"
					countUnit2="bags"
				/>

				<ItemCardIntegerFloat
					title="Chicken Tiki"
					desc=""
					weightUnit="lbs"
					countUnit="case"
				/>

				<ItemCardIntegerIntegerIntegerFloat
					title="Chicken Wings"
					desc=""
					weightUnit="lbs"
					countUnit="case"
					countUnit2="bags"
					countUnit3="small order"
				/>

				<ItemCardIntegerFloat
					title="Island Fish"
					desc=""
					weightUnit="lbs"
					countUnit="case"
				/>

				<ItemCardIntegerIntegerFloat
					title="Garden Burger"
					desc=""
					weightUnit="lbs"
					countUnit="case"
					countUnit2="ea"
				/>

				<ItemCardIntegerIntegerFloat
					title="Chicken Soup"
					desc=""
					weightUnit="lbs"
					countUnit="case"
					countUnit2="bag"
				/>

				<ItemCardIntegerInteger
					title="Brownie"
					desc=""
					countUnit="ea"
					countUnit2="case"
				/>

				<ItemCardIntegerInteger
					title="Kona Pie"
					desc=""
					countUnit="ea"
					countUnit2="box"
				/>

				<ItemCardIntegerInteger
					title="Butter Cake"
					desc=""
					countUnit="ea"
					countUnit2="case"
				/>

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
