import { getServerSession } from "next-auth";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import UserButton from "./user-button";
import { authOptiions } from "@/auth";
import Link from "next/link";
import { Currency, MessagesSquareIcon } from "lucide-react";
import CreateChatButton from "./create-chat-button";

const Header = async () => {
  const session = await getServerSession(authOptiions);
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />
        <div className="flex-1 flex items-center justify-end space-x-4">
          {session ? (
            <>
              <Link href="/chat" prefetch={false}>
                <MessagesSquareIcon className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <>
              <Link href="/pricing" prefetch={false}>
                Pricing
              </Link>
            </>
          )}
          <ModeToggle />
          <UserButton session={session} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
