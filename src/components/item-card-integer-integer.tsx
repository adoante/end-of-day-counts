import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../components/ui/card"
import { ItemCardActionInteger } from "./item-card-action-integer"

interface ItemCardProps {
	title: string
	desc: string
	countUnit: string
	countUnit2: string
}

export function ItemCardIntegerInteger({ title, desc, countUnit, countUnit2 }: ItemCardProps) {
	return (
		<Card className="pb-5">
			<CardHeader className="flex flex-col space-y-2">
				<CardTitle>
					{title}
				</CardTitle>

				<CardDescription>
					{desc}
				</CardDescription>

				<ItemCardActionInteger
					title={title}
					unit={countUnit}
				/>

				<ItemCardActionInteger
					title={title}
					unit={countUnit2}
				/>

			</CardHeader>
		</Card>
	)
}
