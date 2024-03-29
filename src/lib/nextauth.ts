import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";

import GoogleProvider from "next-auth/providers/google"
import DiscordProvider from "next-auth/providers/discord"

// combining next auth with prisma with next-auth/prisma-adapter
// adding user functionality to combine with the db user

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string;
        } & DefaultSession['user']
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
    }
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        jwt: async ({token}) => {
            const db_user = await prisma.user.findFirst({
                where: {
                    email: token?.email
                }
            })
            if (db_user) {
                token.id = db_user.id;
            }
            return token
        },

        // bind token info to session.user so we can access it
        session: ({session, token}) => {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            }
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string
        })
    ]
};

// get user information if they are logged in, otherwise redirect
export const getAuthSession = () => {
    return getServerSession(authOptions);
}