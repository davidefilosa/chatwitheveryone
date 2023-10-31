import { authOptiions } from "@/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptiions);

export { handler as GET, handler as POST };
