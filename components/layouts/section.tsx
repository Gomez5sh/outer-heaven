import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const Section = ({ children }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-20" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="mb-6 flex flex-col items-center sm:items-start justify-between"
    >
      {children}
    </motion.section>
  );
};

export default Section;
