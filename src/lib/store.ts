import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface Task {
  id: string;
  assignee: string;
  summary: string;
  category: string;
  messageType: string;
  status: string;
  lastUpdated: string;
}

interface TaskState {
  tasks: Task[];
  filteredTasks: Task[];
  searchTerm: string;
  messageType: string | null;
  status: string | null;
  assignee: string | null;
  category: string | null;
  currentPage: number;
  tasksPerPage: number;
  activeTab: string;
  setTasks: (tasks: Task[]) => void;
  setSearchTerm: (term: string) => void;
  setMessageType: (type: string | null) => void;
  setStatus: (status: string | null) => void;
  setAssignee: (assignee: string | null) => void;
  setCategory: (category: string | null) => void;
  setCurrentPage: (page: number) => void;
  setActiveTab: (tab: string) => void;
  applyFilters: () => void;
}

const useTaskStore = create<TaskState>()(
  devtools(
    persist(
      (set, get) => ({
        tasks: [],
        filteredTasks: [],
        searchTerm: '',
        messageType: null,
        status: null,
        assignee: null,
        category: null,
        currentPage: 1,
        tasksPerPage: 10,
        activeTab: 'all',
        setTasks: (tasks) => set({ tasks, filteredTasks: tasks }),
        setSearchTerm: (term) => set({ searchTerm: term }, false, 'setSearchTerm'),
        setMessageType: (type) => set({ messageType: type }, false, 'setMessageType'),
        setStatus: (status) => set({ status }, false, 'setStatus'),
        setAssignee: (assignee) => set({ assignee }, false, 'setAssignee'),
        setCategory: (category) => set({ category }, false, 'setCategory'),
        setCurrentPage: (page) => set({ currentPage: page }),
        setActiveTab: (tab) => set({ activeTab: tab }),
        applyFilters: () => {
          const { tasks, searchTerm, messageType, status, assignee, category, activeTab } = get();
          
          let filtered = tasks;

          // Filter by active tab
          if (activeTab !== 'all') {
            filtered = filtered.filter(task => task.category.toLowerCase() === activeTab.slice(0, -4).toLowerCase());
          }

          // Apply search term filter
          if (searchTerm) {
            const lowercasedTerm = searchTerm.toLowerCase();
            filtered = filtered.filter(task => 
              task.summary.toLowerCase().includes(lowercasedTerm) ||
              task.assignee.toLowerCase().includes(lowercasedTerm) ||
              task.id.toLowerCase().includes(lowercasedTerm)
            );
          }

          // Apply other filters ....
          if (messageType) {
            filtered = filtered.filter(task => task.messageType.toLowerCase() === messageType.toLowerCase());
          }
          if (status) {
            filtered = filtered.filter(task => task.status.toLowerCase() === status.toLowerCase());
          }
          if (assignee) {
            filtered = filtered.filter(task => task.assignee.toLowerCase() === assignee.toLowerCase());
          }
          if (category) {
            filtered = filtered.filter(task => task.category.toLowerCase() === category.toLowerCase());
          }

          set({ filteredTasks: filtered, currentPage: 1 });
        },
      }),
      {
        name: 'task-store',
        partialize: (state) => ({
          tasks: state.tasks,
          activeTab: state.activeTab,
        }),
      }
    )
  )
);

export { useTaskStore };