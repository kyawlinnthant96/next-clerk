import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
      <div className="flex flex-col justify-center items-center gap-4">
          <h1>This is Sign In</h1>
         <SignIn path="/sign-in" />
      </div>
  )
}
