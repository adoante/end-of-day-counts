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
}

export function ItemCardInteger({ title, desc, countUnit }: ItemCardProps) {

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

			</CardHeader>
		</Card>
	)
}
