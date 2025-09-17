"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const mockUsers: User[] = [
  { id: 1, name: "Ali Ahmed", email: "ali@example.com", role: "user" },
  { id: 2, name: "Sara Mohamed", email: "sara@example.com", role: "user" },
  { id: 3, name: "Admin", email: "admin@example.com", role: "admin" },
];

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>(mockUsers);

  const deleteUser = (id: number) =>
    setUsers((prev) => prev.filter((u) => u.id !== id));

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">User Management</h2>
        <table className="w-full text-sm text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-2">{u.name}</td>
                <td className="p-2">{u.email}</td>
                <td className="p-2">{u.role}</td>
                <td className="p-2 text-center">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteUser(u.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
