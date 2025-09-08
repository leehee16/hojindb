import { notFound } from 'next/navigation'
import Link from 'next/link'
import Project1 from '@/legacy/project1'
import Project2 from '@/legacy/project2'
import Project3 from '@/legacy/project3'
import Project4 from '@/legacy/project4'

const projectComponents = {
  1: Project1,
  2: Project2,
  3: Project3,
  4: Project4
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id)
  
  if (projectId < 1 || projectId > 4) {
    notFound()
  }

  const ProjectComponent = projectComponents[projectId as keyof typeof projectComponents]

  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            ← 포트폴리오로 돌아가기
          </Link>
        </div>

        <ProjectComponent />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' }
  ]
}