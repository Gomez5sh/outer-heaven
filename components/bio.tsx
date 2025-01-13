import { BioData, Company } from "@/app/page";
import NextLink from "next/link";

interface BioProps {
  bio: BioData;
  work_companies: Company[];
}

const Bio: React.FC<BioProps> = ({ bio, work_companies }) => {
  const getCompanyLink = (description: string): Company | null => {
    const foundCompany = work_companies.find((company) =>
      description.toLowerCase().includes(company.name.toLowerCase())
    );

    return foundCompany || null;
  };

  return (
    <div>
      {Object.entries(bio).map(([year, description]) => {
        const companyLink = getCompanyLink(description);

        return (
          <div
            key={year}
            className="flex flex-row gap-4 w-full space-between mb-2"
          >
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {year}
            </h4>
            <p className="leading-6 [&:not(:first-child)]:mt-1">
              {companyLink ? (
                <>
                  Currently working as a Frontend Developer at{" "}
                  <NextLink
                    href={companyLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors dark:text-zinc-400 text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 relative group"
                  >
                    {companyLink.name.charAt(0).toUpperCase() +
                      companyLink.name.slice(1)}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 group-hover:w-full"></span>
                  </NextLink>
                </>
              ) : (
                description
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Bio;
