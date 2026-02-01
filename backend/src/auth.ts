import { betterAuth } from "better-auth";
import { memoryAdapter } from "better-auth/adapters/memory";
import { db } from "./db";

export const auth = betterAuth({
    database: memoryAdapter(db),
    emailAndPassword: {
        enabled: true,
    },
    trustedOrigins: ["http://localhost:3000"],
});
