import {
	Card,
	CardAction,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "../components/ui/collapsible"

import { Plus, ChevronsUpDown, Undo2 } from "lucide-react"

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
