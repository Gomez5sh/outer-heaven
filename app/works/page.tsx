import { WorkGridItem } from "@/components/gird-item"; // Corrige el typo en "gird-item"
import Section from "@/components/section";

const Works = () => {
  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Works
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <Section>
          <WorkGridItem
            id="1"
            title="Outher Heaven"
            thumbnail="/mastertech.png"
            category="works"
          >
            A simple website to share my experiences and thoughts.
          </WorkGridItem>
        </Section>
      </div>
    </div>
  );
};

export default Works;
