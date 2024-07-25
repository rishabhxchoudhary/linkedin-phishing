"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const columns = [
  {
    key: "id",
    label: "Session Key",
  },
  {
    key: "pass",
    label: "Session Password",
  }
];

export default function App({rows}) {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
