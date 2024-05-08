// "use client";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { UserDetails } from "../components/user-details";
import {
  OrganizationSwitcher,
  UserButton,
  useUser,
  useSession,
} from "@clerk/nextjs";

export default async function DashboardPage() {
  //   const { user } = useUser();
  //   const { session } = useSession();

  const { userId } = auth().protect();
  const user = await clerkClient.users.getUser(userId);
  if (!user) return null;

  return (
    <>
      <main className="max-w-[75rem] w-full mx-auto">
        <div className="grid grid-cols-[1fr_20.5rem] gap-10 pb-10">
          <div>
            <header className="flex gap-4 h-16 justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "size-6",
                    },
                  }}
                />

                <div>
                  <p>{user.firstName && user.lastName}</p>
                </div>
              </div>
            </header>
            <div className="flex justify-start">
              <form action="">
                <input type="file" />
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
