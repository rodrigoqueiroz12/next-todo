import TasksSection from '@/@components/tasks-section'
import Header from '@/@layout/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-600 pb-8">
      <Header />
      <TasksSection />
    </main>
  )
}
