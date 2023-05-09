import { useState } from "react";





const useDeleteElection = (showModal, setShowModal) => {

    const [isButtonLoading, setIsButtonLoading] = useState(false);


    const handleShowModal = () => {
        setShowModal(!showModal);
    };
    

    const deleteElection = async () => {
        setIsButtonLoading(true);
        const id = 2
        try {
            // const response = await deleteElection(id);
            
            const response = true;
            if (response) {
                setShowModal(!showModal);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsButtonLoading(false);
        }
    };

    

    return {
         showModal, handleShowModal, isButtonLoading, deleteElection
    }


}
export default useDeleteElection