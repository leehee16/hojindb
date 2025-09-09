import PortfolioHeader from '@/components/PortfolioHeader'

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <PortfolioHeader />
      <div>
        {children}
      </div>
    </div>
  )
}