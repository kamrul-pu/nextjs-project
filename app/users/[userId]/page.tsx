import { notFound } from "next/navigation";

async function fetchUser(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        console.log("Failed to fetch user:", response.statusText);
        return null;
    }
    const user = response.json();
    return user;
}

export default async function UserPage({params,}: {params: Promise<{ userId: string}>;})  {
    const {userId} = await params;
    console.log(userId);
    const user = await  fetchUser(userId);
    console.log("user=", user);
    if (!user) {
        notFound();
    }
    return (<div>
        <h1>User Details</h1>
        <h3>Name: {user.name}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Phone: {user.phone}</h3>
        <h3>Website: {user.website}</h3>
        {/* <h3>City: {user.address.city}</h3>
        <h3>Street: {user.address.street}</h3>
        <h3>Zipcode: {user.address.zipcode}</h3> */}
    </div>)
}