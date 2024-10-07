import { FelicityActivityPage } from "@/components/FelicityactivityComponent/FelicityActivityPage";
import React from "react";

interface PageProps {
    params: { id: string };
}

function Page({ params: { id } }: PageProps) {

    return <FelicityActivityPage />;
}

export default Page;