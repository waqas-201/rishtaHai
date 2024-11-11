import ShowApp from "@/components/appshowsection/showApp";
import { Contacts } from "@/components/contacts/Contacts";
import ControledWidthWrapper from "@/components/controledWidthWrapper";
import Footer from "@/components/footer/footer";
import Folks from "@/components/genuinefolks/folks";
import { Hero } from "@/components/hero";
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
  <section className={` py-5 md:py-10 lg:py-20  ${className}`}>
    {children}
  </section>
);


export default function Home() {
  return (
    <>

      <Hero /> 


      <SectionWrapper>
        {/* How it works section  */}
        <ControledWidthWrapper>

          <section className=" flex flex-col items-center justify-center  w-full" >

            <div className=" pt-16 flex flex-wrap items-center justify-center" >
          <HeartSection />
        </div>

            <div className="  pt-16 flex flex-wrap items-center sm:justify-evenly md:justify-between justify-center  w-full    " >

          <BoxWrapper
            h2Text1="No.1 & Trusted "
            h2Text2="Matrimonial service"
            pText1="Our largest number of profiles"
            pText2="increases your chances."

          />
          <BoxWrapper
            h2Text1="No Charge for"
            h2Text2="Registration"
            pText1="Registering with us is completely "
            pText2="free and simple."

          /> <BoxWrapper
            h2Text1="Manual Screening"
            h2Text2="and Validation"
            pText1="Our experts manually screen and "
            pText2="validate each profile."

          /> <BoxWrapper
            h2Text1="Best Data Security"
            h2Text2="and Privacy"
            pText1="We follow best practices to keep your "
            pText2="data safe."

          />
        </div>
          </section>

        </ControledWidthWrapper>
      </SectionWrapper>
      {/* folks and secure folks */}
      <SectionWrapper>
        <ControledWidthWrapper>
          {/* Folks section  */}
          <section className="  flex items-center justify-center py-10  ">
            <Folks />
          </section>

          {/* Folks section  */}
          <section className=" flex items-center justify-center w-full py-10 ">
            <SecureFolks />
          </section>

        </ControledWidthWrapper>
      </SectionWrapper>
      {/* Appshow section  */}

      {/* Appshow section  */}
      <SectionWrapper>
        <div className="bg-primary/30 py-4 md:py-8 lg:py-10" >
          <ControledWidthWrapper>
            <section className="  flex items-center justify-center   w-full  ">

          <ShowApp />
        </section>
          </ControledWidthWrapper>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        {/* Testimonials section  */}
        <ControledWidthWrapper>
          <section className=" pt-16 w-full   ">
            <div>
              <TrustedBrand />
            </div>
            <div className=" w-full   flex items-center justify-center pt-12 " >
              {/* <TestimonialCarousel /> */}
              <TestimonialCarousel />

            </div>
          </section>
        </ControledWidthWrapper>
      </SectionWrapper>


      <SectionWrapper>
        <Contacts />
      </SectionWrapper>

          {/* Special section  */}
      <SectionWrapper>
        <ControledWidthWrapper>
          <section className=" pt-16 flex items-center justify-center  ">
            <Special />
          </section>
        </ControledWidthWrapper>
      </SectionWrapper>




      <div className="bg-primary/30">
        <ControledWidthWrapper>
          <Footer />
        </ControledWidthWrapper>
      </div>

    </>
  );
}



