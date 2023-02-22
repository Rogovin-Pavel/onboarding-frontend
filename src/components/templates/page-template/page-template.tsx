import { Navbar } from '@src/components/molecules/navbar/navbar'

export const PageTemplate = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <section
        className="h-screen flex flex-col
        bg-gradient-to-r from-sky-300 to-indigo-300
      "
      >
        {children}
      </section>
    </>
  )
}
