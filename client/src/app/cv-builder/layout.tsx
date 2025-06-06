import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dynamic-Resume-Designer',
  description: 'Build your Resume and get hired',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
      <div className="h-max mt-20">
      
        {children}
        </div>
      
  )
}
