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
	weightUnit: string
	weightUnit2: string
	countUnit: string
}

export function ItemCardFloatFloatInteger({ title, desc, weightUnit, weightUnit2, countUnit }: ItemCardProps) {

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

				<ItemCardActionFloat
					title={title}
					unit={weightUnit2}
				/>

			</CardHeader>

		</Card>
	)
}
