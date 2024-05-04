import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
      <div className="flex flex-col justify-center items-center gap-4">
          <h1>This is Sign Up</h1>
         <SignUp path="/sign-up" />
      </div>
  );
}
