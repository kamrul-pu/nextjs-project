"use client";

import { useState } from "react";

async function MakePostRequest(){
    const res = await fetch(`/api/hello`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "John Doe" }),
    });
    if (!res.ok) {
        console.error("Failed to make POST request:", res.statusText);
        return;
    }
    const data = await res.json();
    console.log("Response from POST request:", data.message);
    return data;
}


export default async function Friends() {

    const [message, setMessage] = useState("");
    const PostMessage = async () => {
        const data = await MakePostRequest();
        setMessage(data.message);
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Friends List</h1>
            <h1>Hey Friends, {message} <button onClick={PostMessage}>Click Here</button></h1>
        </div>
    );
}