import { Hero } from "@/components/hero";
import BoxWrapper from "@/components/howItWorks/BoxWrapper";
import { HeartSection } from "@/components/howItWorks/hearts";
import Special from "@/components/specialSection/special";





export default function Home() {
  return (
    <>

      <Hero /> 
      <div className="flex items-center justify-center">
        <div className="xl:w-[70%] lg:w-[75] md:w-[80%] w-[90%] flex flex-col items-center justify-center" >
          <section className=" flex flex-col items-center justify-center">

            <div className=" pt-16 flex flex-wrap items-center justify-center" >
          <HeartSection />
        </div>

            <div className="  pt-16 flex flex-wrap items-center justify-center   " >
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

          <section className=" pt-16 flex items-center justify-center  ">
            <Special />
          </section>
      </div>
      </div>

    </>
  );
}



