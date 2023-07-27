import { ReduxProvider } from '@/redux/provider'
import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { cn } from '@/utils'

const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Multi Step Form',
  description: 'Front end mentor challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(ubuntu.className, "bg-bcg")}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
