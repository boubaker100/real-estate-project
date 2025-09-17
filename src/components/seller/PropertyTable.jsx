"use client";
import { usePropertyStore } from "@/store/propertyStore";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function PropertyTable() {
  const properties = usePropertyStore((state) => state.properties);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Location</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {properties.map((p) => (
          <TableRow key={p.id}>
            <TableCell>{p.title}</TableCell>
            <TableCell>{p.price}$</TableCell>
            <TableCell>{p.type}</TableCell>
            <TableCell>{p.location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
