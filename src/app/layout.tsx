import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'Town Hostel Mumbai | AC Dormitory Near Airport',
  description: 'Experience comfort, community, and convenience at Town Hostel Mumbai, an AC dormitory located ideally near Mumbai Airport. Perfect for backpackers and budget travelers.',
  keywords: ["Town Hostel, Mumbai, AC Dormitory, Mumbai Airport, backpacker hostel, budget accommodation, hostel Mumbai, dormitory near airport, affordable stay Mumbai"],
  openGraph: {
    "title": "Town Hostel Mumbai | AC Dormitory Near Airport",
    "description": "Experience comfort, community, and convenience at Town Hostel Mumbai, an AC dormitory located ideally near Mumbai Airport. Perfect for backpackers and budget travelers.",
    "url": "https://www.townhostelmumbai.com",
    "siteName": "Town Hostel Mumbai",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/row-people-various-ages-patient-waiting-see-doctor_632498-1146.jpg",
        "alt": "Modern hostel dormitory common area"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Town Hostel Mumbai | AC Dormitory Near Airport",
    "description": "Experience comfort, community, and convenience at Town Hostel Mumbai, an AC dormitory located ideally near Mumbai Airport. Perfect for backpackers and budget travelers.",
    "images": [
      "http://img.b2bpic.net/free-photo/row-people-various-ages-patient-waiting-see-doctor_632498-1146.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
