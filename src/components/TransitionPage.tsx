import { motion } from "framer-motion"

export const TransitionPage: React.FC<{children: React.ReactNode}> = (props): JSX.Element => {
    return (
        <motion.div
        style={{
      position: "relative",
      width: "100%", height: "80%" }}
            initial={{ opacity: 0, left: "50%" }}
            animate={{ opacity: 1, left: 0 }}
            exit={{ opacity: 0, right: "50%" }}
            transition={{ duration: 0.5 }}
        >
            {props.children}
        </motion.div>
    )
}