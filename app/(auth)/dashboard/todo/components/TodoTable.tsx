import React from "react";
import ListOfTodo from "@/app/(auth)/dashboard/todo/components/ListOfTodo";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TodoTable() {
	const tableHeader = ["Title", "Status", "Created at", "Created by"];

	return (
		<Table>
			<TableHeader>
				<TableRow>
					{tableHeader.map((header) => (
						<TableHead key={header}>{header}</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<ListOfTodo />
		</Table>
	);
}