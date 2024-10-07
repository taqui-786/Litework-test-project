'use client'

import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TaskManagementSkeleton() {
  return (
    <div className="w-full  mx-auto p-4 space-y-4">
      <Skeleton className="h-8 w-32" />
      <div className="flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-8 w-24" />
        ))}
      </div>
      <Skeleton className="h-10 w-full" />
      <div className="flex justify-between">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-8 w-32" />
        ))}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {["No of Task", "Assigned To", "Summary", "Category", "Message Type", "Status", "Last Updated"].map((header) => (
              <TableHead key={header}>
                <Skeleton className="h-4 w-full" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(10)].map((_, i) => (
            <TableRow key={i}>
              {[...Array(7)].map((_, j) => (
                <TableCell key={j}>
                  <Skeleton className="h-4 w-full" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center space-x-2">
        {["Previous", "1", "2", "Next"].map((item) => (
          <Skeleton key={item} className="h-8 w-20" />
        ))}
      </div>
    </div>
  )
}