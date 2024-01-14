import { buildConfig } from "payload/config"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { slateEditor } from "@payloadcms/richtext-slate"
import path from "path"
import { users } from "./collections/users"
import dotenv from "dotenv"

dotenv.config({
    path: path.resolve(__dirname,"../.env")
})
export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [users],
    routes: {
        admin: '/sell',
    },
    admin:{
        user:"users",
        bundler: webpackBundler(),
        meta: {
            titleSuffix: "- HippoCons",
            favicon: '/favicon.png',
            ogImage: '/thumbnail.png',
        }
    },
    rateLimit:{
        max: 2000,
    },
    editor: slateEditor({}),
    db: mongooseAdapter({
        url:process.env.MONGODB_URL!,
    }),
    typescript: {
        outputFile: path.resolve(__dirname,"payload-types.ts")
    }
})