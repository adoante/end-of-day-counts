import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../components/ui/card"

import { ItemCardActionFloat } from "./item-card-action-float"


interface ItemCardProps {
	title: string
	desc: string
	weightUnit: string
}

export function ItemCardFloat({ title, desc, weightUnit }: ItemCardProps) {

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

			</CardHeader>

		</Card>
	)
}
