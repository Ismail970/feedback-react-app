import { createContext, useState } from 'react';
import FeedbackData from "../data/FeedbackData";
import { v4 as uuisv4 } from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuisv4();
        setFeedback([newFeedback, ...feedback]);
    };

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Update item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map(item => item.id === id ? { ...item, ...updItem } : item))
    }

    // Delete feedback
    const deleteFeedback = id => {
        setFeedback(feedback.filter(item => item.id !== id));
    };

    return <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext