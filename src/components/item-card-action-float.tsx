import {
	CardAction,
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

import { useState, useEffect } from "react"

interface ItemCardFloatProps {
	title: string
	unit: string
}

export function ItemCardActionFloat({ title, unit }: ItemCardFloatProps) {
	const storageKey = `itemcard_${title.replace(/\s+/g, "_").toLowerCase()}`

	const [addLbs, setAddLbs] = useState<number | null>()

	const [weight, setWeight] = useState<number>(() => {
		const saved = localStorage.getItem(`${storageKey}_${unit}`)
		return saved ? parseFloat(saved) : 0.0
	})

	const [history, setHistory] = useState<number[]>(() => {
		const saved = localStorage.getItem(`${storageKey}_history`)
		return saved ? JSON.parse(saved) : []
	})

	useEffect(() => {
		const savedWeight = localStorage.getItem(`${storageKey}_${unit}`)
		const savedHistory = localStorage.getItem(`${storageKey}_history`)

		if (savedWeight) setWeight(parseFloat(savedWeight))
		if (savedHistory) setHistory(JSON.parse(savedHistory))
	}, [storageKey, unit])

	useEffect(() => {
		localStorage.setItem(`${storageKey}_${unit}`, weight.toString())
		localStorage.setItem(`${storageKey}_history`, JSON.stringify(history))
	}, [weight, history, storageKey, unit])

	function addWeight(lbs: number) {
		setHistory(prev => [...prev, weight])
		setWeight(prev => prev + lbs)
        setAddLbs(null)
	}

	function subWeight(lbs: number) {
		setHistory(prev => [...prev, weight])
		setWeight(prev => prev - lbs)
	}

	function prevWeight() {
		setHistory(prev => {
			if (prev.length === 0) return prev // nothing to undo
			const last = prev[prev.length - 1]
			setWeight(last)
			return prev.slice(0, -1) // remove last entry
		})
	}

	return (
		<CardAction className="space-y-5 w-full">
            <h3>{unit}</h3>
            <div className="flex flex-row items-center justify-between">
    			<span className="flex flex-row w-7/12 gap-2">
	    			<Input
						type="number"
	        			placeholder="3.75"
			    		value={addLbs !== null ? addLbs : ""}
				    	onChange={(e) => {
					    	const val = e.target.value;
						    setAddLbs(val === "" ? null : parseFloat(val));
					    }}
					/>
				    <Button onClick={() => addWeight(addLbs || 0)}><Plus /></Button>
				    <Button onClick={prevWeight} variant="secondary">
					    <Undo2 />
				    </Button>
			    </span>

                <p className="px-2 text-4xl text-center w-min">{weight}</p>
		    </div>

			<Collapsible className="space-y-5 flex flex-col">

				<CollapsibleTrigger asChild>
					<Button variant="outline">
						Subtract Weight <ChevronsUpDown />
					</Button>
				</CollapsibleTrigger>

				<CollapsibleContent className="space-y-5">
					<Label htmlFor="subtract">Subtract Weight - 6" Silver Pans</Label>
					<div className="grid grid-cols-3 gap-2">
						<Button onClick={() => subWeight(1.25)}>1/6 - 6"</Button>
						<Button onClick={() => subWeight(1.5)}>1/4 - 6"</Button>
						<Button onClick={() => subWeight(1.75)}>1/3 - 6"</Button>
						<Button onClick={() => subWeight(2.5)}>1/2 - 6"</Button>
						<Button onClick={() => subWeight(4.0)}>Full - 6"</Button>
					</div>

					<Separator />

					<Label htmlFor="subtract">Subtract Weight - 4" Silver Pans</Label>
					<div className="grid grid-cols-3 gap-2">
						<Button onClick={() => subWeight(0.5)}>1/9 - 4"</Button>
						<Button onClick={() => subWeight(1.0)}>1/6 - 4"</Button>
						<Button onClick={() => subWeight(1.25)}>1/4 - 4"</Button>
						<Button onClick={() => subWeight(1.5)}>1/3 - 4"</Button>
						<Button onClick={() => subWeight(2.0)}>1/2 - 4"</Button>
						<Button onClick={() => subWeight(3.5)}>Full - 4"</Button>
					</div>

					<Separator />


					<Label htmlFor="subtract">Subtract Weight - Cambro with Lid</Label>
					<div className="grid grid-cols-3 gap-2">
						<Button onClick={() => subWeight(0.75)}>2 qt.</Button>
						<Button onClick={() => subWeight(1.5)}>8 qt.</Button>
						<Button onClick={() => subWeight(4.0)}>22 qt.</Button>
					</div>

					<Separator />

					<Label htmlFor="subtract">Subtract Weight - Misc.</Label>
					<div className="grid grid-cols-3 gap-2">
						<Button onClick={() => subWeight(2.75)}>Grey Tub</Button>
						<Button onClick={() => subWeight(4.0)}>Sheet Tray</Button>
						<Button onClick={() => subWeight(2.5)}>White Tray</Button>
					</div>
				</CollapsibleContent>
			</Collapsible>

		</CardAction>
	)
}
