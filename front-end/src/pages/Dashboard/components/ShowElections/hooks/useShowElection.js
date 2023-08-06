import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getElectionsByAdmin } from "../../../services/dashboardService";

const useShowElection = (showModal) => {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [elections, setElections] = useState();

    // Call get elections api
    const fetchElections = async () => {
        try {
            const elections = await getElectionsByAdmin();
            if (elections) {
                setElections(elections);
            } else {
                setElections();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const redirectElection = async (id) => {
        navigate(`/election/${id}/overview`);
    };

    useEffect(() => {
        fetchElections();
    }, [showModal]);

    return {isLoading, elections, redirectElection  }

}
export default useShowElection