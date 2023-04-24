import React from "react";

interface SidebarProps {
    data: any
}

export function InfoSatellite({ data }: SidebarProps) {
    if (data == null) {
        return <div></div>
    }

    return (
        <h1> Information </h1>
    );
}
