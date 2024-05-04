import React from 'react';
import Link from "next/link";
import {auth} from "@clerk/nextjs/server";
import {UserButton} from "@clerk/nextjs";

const Headers = () => {
    const {userId} = auth();
    return (
        <div className="bg-slate-900 text-white">
            <div className="container mx-auto flex items-center justify-between py-4">
                <Link href="/">Home</Link>
                <div className="">
                    {userId ? (
                        <UserButton afterSignOutUrl="/" />
                    ) : (
                        <div className="gap-4 flex items-center">
                            <Link href="/sign-up">singup</Link>
                            <Link href="/sign-in">signin</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Headers;
