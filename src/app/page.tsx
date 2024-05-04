import {auth, currentUser} from "@clerk/nextjs/server";


export default async function Home() {
    const {userId} = auth();
    const user = await currentUser();
    console.log(user)
  return (
    <main className="min-w-screen h-screen">
      <h1 className="text-4xl font-semibold mt-10 text-center">Home Page</h1>
        <p className="">{userId}</p>
    </main>
  );
}
