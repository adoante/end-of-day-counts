import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button"

type ItemData = Record<string, number | string | null>;
type ItemsMap = Record<string, ItemData>;

export function ItemcardsTable(): React.ReactNode {
	const [items, setItems] = useState<ItemsMap>({});

	function loadItems(): void {
		const data: ItemsMap = {};

		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if (!key || !key.startsWith("itemcard_") || key.endsWith("_history")) continue;

			const raw = localStorage.getItem(key);
			if (!raw) continue;

			let value: number | string | null = null;
			try {
				value = JSON.parse(raw);
			} catch {
				value = raw;
			}

			const parts = key.split("_");
			const unit = parts.pop() ?? "unknown";
			const name = parts.slice(1).join("_");

			if (!data[name]) data[name] = {};
			data[name][unit] = value;
		}

		setItems(data);
	}

	useEffect(() => {
		loadItems();
	}, []);

	const columns: string[] = ["lbs", "case", "ea", "patty", "4oz", "spicy", "chubs", "box", "bags", "small order"];

	// ✅ Mapping from storage keys to display names
	const nameMap: Record<string, string> = {
		beef_patty_6oz: "Beef Patty 6oz",
		chili: "Chili",
		beef_patty_3_2oz: "Beef Patty 3.2oz",
		beef_patty_1_6oz_slider: "Beef Patty Sliders 1.6oz",
		plant_based_patty_4oz: "Plant-Based Patty 4oz",
		flattened_chicken: "Flattened Chicken",
		fried_chicken: "Fried Chicken",
		chicken_breast_chunk: "Chick Breast Chunk",
		ground_turkey: "Ground Turkey",
		baja_chicken: "Baja Chicken",
		carnitas: "Carnitas",
		chicken_tiki: "Chicken Tiki",
		chicken_wings: "Chicken Wings",
		island_fish: "Island Fish",
		garden_burger: "Garden Burger 3.4oz",
		chicken_soup: "Chicken Soup",
		brownie: "Brownie",
		kona_pie: "Kona Pie",
		butter_cake: "Butter Cake",
	};

	// ✅ Desired display order
	const displayOrder = [
		"Beef Patty 6oz",
		"Chili",
		"Beef Patty 3.2oz",
		"Beef Patty Sliders 1.6oz",
		"Plant-Based Patty 4oz",
		"Flattened Chicken",
		"Fried Chicken",
		"Chick Breast Chunk",
		"Ground Turkey",
		"Baja Chicken",
		"Carnitas",
		"Chicken Tiki",
		"Chicken Wings",
		"Island Fish",
		"Garden Burger 3.4oz",
		"Chicken Soup",
		"Brownie",
		"Kona Pie",
		"Butter Cake",
	];

	// ✅ Sort items by mapped display name order
	const sortedEntries = Object.entries(items).sort(([a], [b]) => {
		const displayA = nameMap[a] ?? a.replace(/_/g, " ");
		const displayB = nameMap[b] ?? b.replace(/_/g, " ");
		const indexA = displayOrder.indexOf(displayA);
		const indexB = displayOrder.indexOf(displayB);

		if (indexA === -1 && indexB === -1) return displayA.localeCompare(displayB);
		if (indexA === -1) return 1;
		if (indexB === -1) return -1;
		return indexA - indexB;
	});

	return (
		<div className="flex flex-col gap-4">
			<Button
				onClick={loadItems}
			>
				Generate Table
			</Button>

			<table className="text-left border">
				<thead className="bg-foreground text-background">
					<tr>
						<th className="px-2 py-1">Name</th>
						<th>Values</th>
					</tr>
				</thead>
				<tbody>
					{sortedEntries.map(([name, data]) => {
						const displayName = nameMap[name] ?? name.replace(/_/g, " ");
						return (
							<tr key={name}>
								<td className="border px-2 py-1">{displayName}</td>
								<td className="border px-2 py-1">
									{columns
										.filter((col) => data[col] !== undefined)
										.map((col) => (
											<div key={col}>{`${col}: ${data[col]}`}</div>
										))}
									{columns.every((col) => data[col] === undefined) && "—"}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
