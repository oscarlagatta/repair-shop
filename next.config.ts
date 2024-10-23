import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {}
export default withSentryConfig(nextConfig, {
    org: "none-vw9",
    project: "repairshop",

    // An auth token is required for uploading source maps.
    authToken: process.env.SENTRY_AUTH_TOKEN,

    silent: false, // Can be used to suppress logs

    hideSourceMaps: true,

    disableLogger: true,

});