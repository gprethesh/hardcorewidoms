import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Para from "../components/Para";
import Pillars from "../components/Pillars";
import Books from "../components/Books";

import { Separator } from "@/components/ui/separator";

const Intro = () => {
  return (
    <>
      <main className="intro">
        <Helmet>
          <title>Ecommerce</title>
          <meta
            name="description"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus possimus quam, ducimus eos quos voluptatem."
          />
        </Helmet>
        <Hero />

        <Para />

        <Separator className="bg-black/10" />
        <Pillars />

        <Separator className="bg-black/10" />
        <Books />
      </main>
    </>
  );
};

export default Intro;
