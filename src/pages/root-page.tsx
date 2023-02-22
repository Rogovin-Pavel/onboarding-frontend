import { Navbar } from '@src/components/molecules/navbar/navbar'
import { PageTemplate } from '@src/components/templates/page-template/page-template'

export const RootPage = () => {
  return (
    <PageTemplate>
      <section
        className="flex flex-col items-center
        gap-[16px]
        text-white
        text-[24px]
        my-auto mx-auto
        w-[600px] p-7"
      >
        Onboarding
      </section>
    </PageTemplate>
  )
}
