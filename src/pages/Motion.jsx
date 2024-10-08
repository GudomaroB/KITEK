import { motion } from "framer-motion";

export const Motion = ({ menu, children }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }} // Начальное состояние
      animate={{ opacity: menu ? 1 : 0 }} // Анимация при открытии
      exit={{ opacity: 0 }} // Анимация при выходе
      transition={{ duration: 0.5 }} // Длительность анимации
    >
      {children}
    </motion.div>
  );
};
