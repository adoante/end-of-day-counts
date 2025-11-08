import {
	CardAction,
} from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "../components/ui/collapsible"
import { Button } from "../components/ui/button"

import { Plus, ChevronsUpDown, Undo2 } from "lucide-react"

import { useState, useEffect } from "react"

interface ItemCardIntegerProps {
	title: string
	unit: string
}

export function ItemCardActionInteger({ title, unit }: ItemCardIntegerProps) {
	const storageKey = `itemcard_${title.replace(/\s+/g, "_").toLowerCase()}`

	const [addCnt, setAddCnt] = useState(0.0)

	const [count, setCount] = useState<number>(() => {
		const saved = localStorage.getItem(`${storageKey}_${unit}`)
		return saved ? parseFloat(saved) : 0.0
	})

	const [history, setHistory] = useState<number[]>(() => {
		const saved = localStorage.getItem(`${storageKey}_history`)
		return saved ? JSON.parse(saved) : []
	})

	useEffect(() => {
		const savedCount = localStorage.getItem(`${storageKey}_${unit}`)
		const savedHistory = localStorage.getItem(`${storageKey}_history`)

		if (savedCount) setCount(parseFloat(savedCount))
		if (savedHistory) setHistory(JSON.parse(savedHistory))
	}, [storageKey, unit])

	useEffect(() => {
		localStorage.setItem(`${storageKey}_${unit}`, count.toString())
		localStorage.setItem(`${storageKey}_history`, JSON.stringify(history))
	}, [count, history, storageKey, unit])

	function addCount(lbs: number) {
		setHistory(prev => [...prev, count])
		setCount(prev => prev + lbs)
	}

	function subCount(lbs: number) {
		setHistory(prev => [...prev, count])
		setCount(prev => prev - lbs)
	}

	function prevCount() {
		setHistory(prev => {
			if (prev.length === 0) return prev // nothing to undo
			const last = prev[prev.length - 1]
			setCount(last)
			return prev.slice(0, -1) // remove last entry
		})
	}


	return (
		<CardAction className="space-y-5 w-full">
			<div className="space-y-2">
				<Label htmlFor="addCount">Add {unit}</Label>
				<span className="flex flex-row gap-2 w-full">
					<Input
						type="number"
						placeholder="3.75"
						value={addCnt}
						onChange={(e) => setAddCnt(parseFloat(e.target.value) || 0)}
					/>
					<Button onClick={() => addCount(addCnt)}><Plus /></Button>
				</span>
			</div>

			<div className="space-y-2">
				<Label htmlFor="count">{unit}</Label>
				<span className="flex flex-row justify-between items-center mx-1">
					<p className="px-2">{count} {unit}</p>
					<Button onClick={prevCount} variant="secondary">
						<Undo2 />
					</Button>
				</span>
			</div>

			<Collapsible className="space-y-5">

				<CollapsibleTrigger asChild>
					<Button variant="outline">
						Subtract count <ChevronsUpDown />
					</Button>
				</CollapsibleTrigger>

				<CollapsibleContent className="space-y-5">
					<Label htmlFor="subtract">Subtract Count</Label>
					<div className="grid grid-cols-3 gap-2">
						<Button onClick={() => subCount(1)}>1</Button>
						<Button onClick={() => subCount(2)}>2</Button>
						<Button onClick={() => subCount(3)}>3</Button>
					</div>
				</CollapsibleContent>
			</Collapsible>

		</CardAction>
	)
}
