import { motion, AnimatePresence } from "framer-motion"
import { useContext } from 'react';
// import Spinner from './shared/Spinner';
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from '../context/FeedbackContext';
// import Error from './shared/Error';

function FeedbackList () {
    // const { feedback, isLoading, error } = useContext(FeedbackContext)

    // if (!isLoading && (!feedback || feedback.length === 0)) {
    //     return <p>No feedback yet</p>;
    // }

    // if (error) {
    //     return <Error />
    // } else if (isLoading) {
    //     return <Spinner />
    // } else {
    //     return (
    //         <div className="feedback-list">
    //             <AnimatePresence>
    //                 {feedback.map(item => (
    //                     <motion.div
    //                         key={item.id}
    //                         initial={{ opacity: 0 }}
    //                         animate={{ opacity: 1 }}
    //                         exit={{ opacity: 0 }}
    //                     >
    //                         <FeedbackItem
    //                             key={item.id}
    //                             item={item}
    //                         />
    //                     </motion.div>
    //                 ))}
    //             </AnimatePresence>
    //         </div>
    //     )
    // }

    const { feedback } = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>;
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map(item => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem
                            key={item.id}
                            item={item}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList;