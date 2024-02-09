import SignInButton from "@/components/SignInButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

// server component so can do user validation here for creating protected routes
export default async function Home() {
  
  const session = await getAuthSession();
  if (session?.user){
    // if user is logged in then send them to dashboard
    redirect('/dashboard')
  }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>
            Welcome to Quail!
          </CardTitle>
          <CardDescription>
            Quail is a quiz app that allows you to create and share AI generated quizzes with your friends.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <SignInButton provider="google" text="Sign In with Google">
          </SignInButton>
          <div className="p-1"></div>
          <SignInButton provider="discord" text="Sign In with Discord">
          </SignInButton>
        </CardContent>
      </Card>
    </div>
  );
}
