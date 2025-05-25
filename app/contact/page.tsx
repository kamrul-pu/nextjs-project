import ButtonComponent from "./button";

export default async function Contact() {
    console.log("Hey is this in server or cleint?")
    const respone = await fetch("https://jsonplaceholder.typicode.com/posts", );
    const posts = await respone.json();
    console.log(posts);
    return (<div>
        <ButtonComponent />
    </div>)
}