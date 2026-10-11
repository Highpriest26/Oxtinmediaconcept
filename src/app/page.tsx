import { FeaturedPortfolio } from "@/components/sections/FeaturedPortfolio";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ProductionCapability } from "@/components/sections/ProductionCapability";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { SculptureShowcase } from "@/components/sections/SculptureShowcase";
import { SelectedBrands } from "@/components/sections/SelectedBrands";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ServicesList } from "@/components/sections/ServicesList";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <SelectedWork />
      <ServicesList />
      <FeaturedPortfolio />
      <ProductionCapability />
      <ProcessSteps tone="dark" />
      <SculptureShowcase />
      <SelectedBrands />
      <FinalCta />
    </>
  );
}
