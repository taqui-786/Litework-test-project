"use client";
import React, { useEffect, useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar, CirclePlus, Loader2, Search } from "lucide-react";
import { useTaskStore } from "@/lib/store";
import { initialTasks, tabs } from "@/app/data";
import { TaskTableComponent } from "./TaskTable";
import { TaskManagementSkeleton } from "./TaskManagementSkeleton";

export default function MyTaskPage() {
  const {
    filteredTasks,
    searchTerm,
    messageType,
    status,
    assignee,
    category,
    currentPage,
    tasksPerPage,
    activeTab,
    setSearchTerm,
    setMessageType,
    setStatus,
    setAssignee,
    setCategory,
    setCurrentPage,
    setActiveTab,
    setTasks,
    applyFilters,
  } = useTaskStore();

  const [isLoading, setIsLoading] = useState(true);
  const dataLoadedRef = useRef(false);
  useEffect(() => {
    const loadInitialTasks = async () => {
      if (dataLoadedRef.current) return;
      try {
        setTasks(initialTasks);
        applyFilters();
      } catch (error) {
        console.error("Error loading tasks", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialTasks();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    applyFilters();
  };

  const handleMessageTypeChange = (value: string) => {
    setMessageType(value === "all" ? null : value);
    applyFilters();
  };
  const handleStatusChange = (value: string) => {
    setStatus(value === "all" ? null : value);
    applyFilters();
  };
  const handleAssingeeChange = (value: string) => {
    setAssignee(value === "all" ? null : value);
    applyFilters();
  };
  const handleCategoryChange = (value: string) => {
    setCategory(value === "all" ? null : value);
    applyFilters();
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen m-8">
        <TaskManagementSkeleton />
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
      <div className="bg-white rounded-lg shadow">
        <div className="flex bg-gray-50 w-fit p-1 rounded-t-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? "text-black bg-white shadow"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <Select
              value={messageType || undefined}
              onValueChange={handleMessageTypeChange}
            >
              <SelectTrigger className="w-fit max-w-[185px] border-dashed rounded-md relative">
                <CirclePlus className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Message Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="sms">SMS</SelectItem>
                <SelectItem value="CALL">CALL</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={status || undefined}
              onValueChange={handleStatusChange}
            >
              <SelectTrigger className="w-fit max-w-[185px] border-dashed rounded-md">
                <CirclePlus className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="needs reply">Needs Reply</SelectItem>
                <SelectItem value="not started">Not Started</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={assignee || undefined}
              onValueChange={handleAssingeeChange}
            >
              <SelectTrigger className="w-fit max-w-[185px] border-dashed rounded-md">
                <CirclePlus className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Assignee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="annette black">Annette Black</SelectItem>
                <SelectItem value="leslie alexander">
                  Leslie Alexander
                </SelectItem>
                <SelectItem value="cameron williamson">
                  Cameron Williamson
                </SelectItem>
              </SelectContent>
            </Select>

            <Select value={category || undefined} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-fit max-w-[185px] border-dashed rounded-md">
                <CirclePlus className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="work order">Work Order</SelectItem>
                <SelectItem value="inquiries">Inquiries</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              className="ml-auto border-dashed rounded-md"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Jan 20, 2024 - Feb 09,2024
            </Button>
          </div>
          <TaskTableComponent tasks={currentTasks} />
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {Array.from({
              length: Math.ceil(filteredTasks.length / tasksPerPage),
            }).map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                onClick={() => paginate(index + 1)}
                className="mx-1"
              >
                {index + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(filteredTasks.length / tasksPerPage)
              }
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
