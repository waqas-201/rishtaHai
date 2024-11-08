import { Hero } from "@/components/hero";
import BoxWrapper from "@/components/howItWorks/BoxWrapper";
import { HeartSection } from "@/components/howItWorks/hearts";





export default function Home() {
  return (
    <>

      <Hero /> 
      <div className="">

        <div className=" pt-20 flex flex-wrap items-center justify-center" >
          <HeartSection />
        </div>

        <div className="  pt-20 flex flex-wrap items-center justify-center   " >
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
      </div>
    </>
  );
}



