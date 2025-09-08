import Resume from '@/components/Resume'

export const metadata = {
  title: "About - Hojin's Blog",
  description: "이호진의 소개 및 이력서"
}

export default function AboutPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Resume />
      </div>
    </div>
  )
}