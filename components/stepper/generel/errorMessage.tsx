import { errorAnimation } from '@/constants/constents'
import { motion } from 'framer-motion'
import React from 'react'

const ErrorMessage = ({ message }: { message: string | undefined }) => {
    return (
        < motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={errorAnimation}
            transition={{ duration: 0.2 }
            }
        >
            {
                message ?
                    <p className="text-red-500 md:text-sm  text-[11px]  font-medium">{message}</p>
                    : null

            }
        </motion.div>
    )
}

export default ErrorMessage