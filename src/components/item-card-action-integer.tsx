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

	const [addCnt, setAddCnt] = useState<number | null>(null)

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
        setAddCnt(null)
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
            <h3>{unit}</h3>
            <div className="flex flex-row items-center justify-between">
				<span className="flex flex-row gap-2 w-7/12">
					<Input
						type="number"
						placeholder="2"
						value={addCnt !== null ? addCnt : ""}
						onChange={(e) => {
							const val = e.target.value;
							setAddCnt(val === "" ? null : parseFloat(val));
						}}
					/>
					<Button onClick={() => addCount(addCnt || 0)}><Plus /></Button>
					<Button onClick={prevCount} variant="secondary">
						<Undo2 />
					</Button>
				</span>

				<p className="px-2 text-4xl text-center w-min">{count}</p>
			</div>
		</CardAction>
	)
}
