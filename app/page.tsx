import { Hero } from "@/components/hero";
import ShowApp from "@/components/appshowsection/showApp";
import { Contacts } from "@/components/contacts/Contacts";
import ControledWidthWrapper from "@/components/controledWidthWrapper";
import Footer from "@/components/footer/footer";
import Folks from "@/components/genuinefolks/folks";
import BoxWrapper from "@/components/howItWorks/BoxWrapper";
import { HeartSection } from "@/components/howItWorks/hearts";
import { TestimonialCarousel } from "@/components/reviewsSection/TestimonialCarousel";
import TrustedBrand from "@/components/reviewsSection/TrustedBrand";
import SecureFolks from "@/components/secureData/secureFolks";
import Special from "@/components/specialSection/special";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className = "" }: SectionProps) => (
  <section className={`py-16 md:py-24 ${className}`}>
    {children}
  </section>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />

      <SectionWrapper>
        <ControledWidthWrapper>
          <section className="flex flex-col items-center justify-center w-full space-y-16">
            <HeartSection />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              <BoxWrapper
                h2Text1="No.1 & Trusted"
                h2Text2="Matrimonial service"
                pText1="Our largest number of profiles"
                pText2="increases your chances."
              />
              <BoxWrapper
                h2Text1="No Charge for"
                h2Text2="Registration"
                pText1="Registering with us is completely"
                pText2="free and simple."
              />
              <BoxWrapper
                h2Text1="Manual Screening"
                h2Text2="and Validation"
                pText1="Our experts manually screen and"
                pText2="validate each profile."
              />
              <BoxWrapper
                h2Text1="Best Data Security"
                h2Text2="and Privacy"
                pText1="We follow best practices to keep your"
                pText2="data safe."
              />
            </div>
          </section>
        </ControledWidthWrapper>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-background to-accent/10">
        <ControledWidthWrapper>
          <Folks />
          <SecureFolks />
        </ControledWidthWrapper>
      </SectionWrapper>

      <SectionWrapper className="bg-primary/5">
        <ControledWidthWrapper>
          <ShowApp />
        </ControledWidthWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <ControledWidthWrapper>
          <TrustedBrand />
          <div className="mt-16">
            <TestimonialCarousel />
          </div>
        </ControledWidthWrapper>
      </SectionWrapper>

      <SectionWrapper className="bg-accent/5">
        <Contacts />
      </SectionWrapper>

      <SectionWrapper>
        <ControledWidthWrapper>
          <Special />
        </ControledWidthWrapper>
      </SectionWrapper>

      <footer className="bg-primary/5">
        <ControledWidthWrapper>
          <Footer />
        </ControledWidthWrapper>
      </footer>
    </main>
  );
}