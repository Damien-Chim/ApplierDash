"use-client"
import { Button } from "@mui/material"
import React from "react"
import Link from "next/link"
type NavbarProps = {
    setShowModal: (value: boolean) => void
}
export default function Navbar() {
    return (
        <nav className="border-b bg-white">
            {/* justify-bewteen
            justify items along the container's main axis such that 
            there is an equal amount of space between each item */}
            <div className="flex py-6 px-6 justify-between">
                <div className="text-2xl font-bold text-gray-800 text-left">
                    <Link href="/about">ApplierDash</Link>
                </div>

                <div className="flex gap-6 text-gray-600">
                    <Link href="/" className="hover:text-black">Home</Link>
                    <Link href="/analytics" className="hover:text-black">Analytics</Link>
                    <Link href="/Applications" className="hover:text-black">Applications</Link>
                    <Link href="Insights" className="hover:text-black">Insights</Link>
                </div>

                <div className="flex gap-6 text-gray-600">
                    <Link href="/profile">Profile</Link>
                    <Link href="/settings">Settings</Link>
                </div>
            </div>
        </nav>

    )
}