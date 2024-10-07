import React from "react";
import type { Metadata } from "next";
import MyTaskPage from "@/components/MyTaskComponent/MyTasksPage";

export const metadata: Metadata = {
  title: "LightWork | FelicityActivity",
  description: "",
};
function page() {
  return <MyTaskPage />;
}

export default page;
