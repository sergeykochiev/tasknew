"use client"

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export default function TTLink(p: { children: ReactNode } & LinkProps) {
    return <Link {...p} className="underline text-tt-darkgray hover:text-tt-black transition-all"/>
}