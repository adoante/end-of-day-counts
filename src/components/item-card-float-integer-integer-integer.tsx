import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../components/ui/card"
import { ItemCardActionFloat } from "./item-card-action-float"
import { ItemCardActionInteger } from "./item-card-action-integer"

interface ItemCardProps {
	title: string
	desc: string
	countUnit: string
	countUnit2: string
	countUnit3: string
	weightUnit: string
}

export function ItemCardIntegerIntegerIntegerFloat({ title, desc, countUnit, countUnit2, countUnit3, weightUnit }: ItemCardProps) {

	return (
		<Card className="pb-5">
			<CardHeader className="flex flex-col space-y-2">
				<CardTitle>
					{title}
				</CardTitle>

				<CardDescription>
					{desc}
				</CardDescription>

				<ItemCardActionFloat
					title={title}
					unit={weightUnit}
				/>

				<ItemCardActionInteger
					title={title}
					unit={countUnit}
				/>

				<ItemCardActionInteger
					title={title}
					unit={countUnit2}
				/>

				<ItemCardActionInteger
					title={title}
					unit={countUnit3}
				/>


			</CardHeader>
		</Card>
	)
}
