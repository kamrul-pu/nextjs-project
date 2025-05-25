"use client";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "About Page",
//     description: "This is the about page of the application.",
//     keywords: "about, nextjs, application",
//     authors: [{ name: "John Doe", url: "https://example.com" }],
//     creator: "John Doe",
//     openGraph: {
//         title: "About Page",
//         description: "This is the about page of the application.",
//         url: "https://example.com/about",
//         siteName: "Next.js Application",
//         images: [
//             {
//                 url: "https://example.com/og-image.jpg",
//                 width: 1200,
//                 height: 630,
//                 alt: "Open Graph Image",
//             },
//         ],
//         locale: "en_US",
//         type: "website",
//     },
//     twitter: {
//         card: "summary_large_image",
//         title: "About Page",
//         description: "This is the about page of the application.",
//         images: ["https://example.com/twitter-image.jpg"],
//         site: "@johndoe",
//         creator: "@johndoe",
//     },
//     alternates: {
//         canonical: "https://example.com/about",
//         languages: {
//             "en-US": "https://example.com/about",
//             "fr-FR": "https://example.com/fr/about",
//         },
//     },
//     robots: {
//         index: true,
//         follow: true,
//         nocache: false,
//         noarchive: false,
//         // noindex: false,
//         // nofollow: false,
//         nosnippet: false,
//         noimageindex: false,
//         // noodp: false,
//         noydir: false,
//         maxSnippet: -1,
//         maxImagePreview: "large",
//         maxVideoPreview: -1,
//     },
//     icons: {
//         icon: "/favicon.ico",
//         shortcut: "/favicon.ico",
//         apple: "/apple-touch-icon.png",
//         other: {
//             rel: "icon",
//             url: "/favicon.ico",
//             sizes: "32x32",
//             type: "image/png",
//         },
//     },
//     manifest: "/site.webmanifest",
//     themeColor: "#ffffff",
//     appleWebApp: {
//         capable: true,
//         statusBarStyle: "default",
//         title: "About Page",
//         startupImage: "/apple-touch-startup-image.png",
//     },
//     verification: {
//         google: "google-site-verification-code",
//         yandex: "yandex-verification-code",
//         me: "me-verification-code",
//         other: {
//             name: "custom-verification",
//             content: "custom-verification-code",
//         },
//     },
//     twitterVerification: {
//         card: "summary_large_image",
//         site: "@johndoe",
//         creator: "@johndoe",
//         title: "About Page",
//         description: "This is the about page of the application.",
//         images: ["https://example.com/twitter-image.jpg"],
//     },
// };

export default function About() {
    console.log("Hey is this in server or cleint?")
    return (<div>About Page</div>)
}