import { motion } from "framer-motion";

import stylesDot from "../styles/Dot.module.scss";

export default function CartCount({ count }) {
  // if (!count) return null;

  return (
    <motion.div
      className={stylesDot.root}
      animate={{ scale: [1, 2, 1] }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      {count}
    </motion.div>
  );
}
