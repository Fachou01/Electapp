import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getElectionsByAdmin } from "../../../services/dashboardService";
import { AuthContextApp } from "../../../../../utils/contexts/AuthContext";

const useShowElection = (showModal) => {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [elections, setElections] = useState();

    const {authenticatedUser} = useContext(AuthContextApp);

    const fetchElections = async () => {
        try {
            const elections = await getElectionsByAdmin(authenticatedUser.id);
            
            if (elections) setElections(elections);
             else setElections();
            
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const redirectElection = (id) => {
        navigate(`/election/${id}/overview`);
    };

    useEffect(() => {
        authenticatedUser && fetchElections();
    }, [authenticatedUser, showModal]);


    return {
        isLoading,
        elections,
        redirectElection
    }

}
export default useShowElection