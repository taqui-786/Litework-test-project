import { FelicityActivityPage } from "@/components/FelicityactivityComponent/FelicityActivityPage";
import React from "react";
import type { Metadata } from 'next'

interface PageProps {
  params: { id: string };
}

// Change metadata to a function to accept the `params`
export async function generateMetadata({ params: { id } }: PageProps): Promise<Metadata> {
  return {
    title: `Felicity | Activity ${id}`, 
    description: `Details for activity ${id}`, 
  };
}

function Page({ params: { id } }: PageProps) {
  
  return <FelicityActivityPage id={id} />;
}

export default Page;
