import Resume from '@/components/Resume'

export const metadata = {
  title: "Resume - Portfolio",
  description: "이호진 이력서"
}

export default function PortfolioResumePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Resume />
    </div>
  )
}