'use client'

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dot } from 'lucide-react'

interface Task {
  id: string
  assignee: string
  summary: string
  category: string
  messageType: string
  status: string
  lastUpdated: string
}

interface TaskTableProps {
  tasks: Task[]
}

export function TaskTableComponent({ tasks }: TaskTableProps) {
  return (
    <div className="overflow-x-auto border border-gray-100">
      <Table>
        <TableHeader>
          <TableRow className="bg-white">
            <TableHead className="text-sm">No of Task</TableHead>
            <TableHead className="text-sm">Assigned To</TableHead>
            <TableHead className="text-sm">Summary</TableHead>
            <TableHead className="text-sm">Category</TableHead>
            <TableHead className="text-sm">Message Type</TableHead>
            <TableHead className="text-sm">Status</TableHead>
            <TableHead className="text-sm">Last Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{task.id}</TableCell>
              <TableCell>{task.assignee}</TableCell>
              <TableCell>{task.summary}</TableCell>
              <TableCell ><span className="bg-gray-100 text-xs px-2 rounded-full py-1">{task.category}</span></TableCell>
              <TableCell><span className="bg-gray-100 text-xs px-2 rounded-full py-1">{task.messageType}</span></TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium flex items-center justify-center w-fit  text-black ${
                    task.status === "Resolved"
                      ? "bg-green-100 "
                      : task.status === "Needs Reply"
                      ? "bg-yellow-100 "
                      : task.status === "Not Started"
                      ? "bg-gray-100 "
                      : "bg-blue-100 "
                  }`}
                >
                  <Dot  className={`h-4 w-4 ${
                    task.status === "Resolved"
                      ? " text-green-800"
                      : task.status === "Needs Reply"
                      ? " text-yellow-800"
                      : task.status === "Not Started"
                      ? " text-gray-800"
                      : " text-blue-800"
                  }`} />
                  {task.status}
                </span>
              </TableCell>
              <TableCell>
                <div>{task.lastUpdated.split('\n')[0]}</div>
                <div className="text-xs text-gray-500">{task.lastUpdated.split('\n')[1]}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}