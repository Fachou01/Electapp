import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getElectionById } from "../../logic/electionDashboardService";
import { useNavigate, useParams } from "react-router-dom";
import { confirmElectionDetails, launchElection } from "./launchService";

const useLaunch = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [currentNavigationItem, setCurrentNavigationItem] = useState(0);

  const [electionError, setElectionError] = useState();

  const [navigationActionError, setNavigationActionError] = useState();

  const changeNavigation = (navigationNumber) => {
    setCurrentNavigationItem(navigationNumber);
  }

  const isLastNavigationItem = (navigationItems) => {
    return currentNavigationItem === navigationItems.length - 1;
  }

  const { isLoading: isElectionLoading, data: electionData } = useQuery(
    ["electionConfirmDetails"],
    () => getElectionById(id),
    {
      onError: (error) => {
        setElectionError("Error Occurred");
      }
    }
  );

  const { mutate: confirmElectionDetailsMutate, data: confirmDetailsData, isLoading: isNavigationActionLoading } = useMutation({
    mutationFn: (election) => {
      return confirmElectionDetails(election.id)
    },
    onSuccess: (data) => {
      changeNavigation(currentNavigationItem + 1);
    },
    onError: (error) => {
      const code = error?.response?.data?.code;
      if (!code) setNavigationActionError("Error occured");
      switch (code) {
        case 3000: setNavigationActionError("Start Date of this election is greater than End Date"); break;
        case 3010: setNavigationActionError("Start date of this election is set to a date in the past"); break;
        default: setNavigationActionError("Error occured");
      }
    }
  })

  const { mutate: launchElectionMutate, data: launchElectionData, isLoading: isLaunchElection } = useMutation({
    mutationFn: (election) => {
      const data = {
        status: "STARTED"
      }
      return launchElection(election.id, data)
    },
    onSuccess: (data) => {
      console.log("data", data);
      changeNavigation(currentNavigationItem + 1);
    },
    onError: (error) => {
      console.log("error", error);
      setNavigationActionError("Error occured");
    }
  })

  return {
    currentNavigationItem,
    changeNavigation,
    isLastNavigationItem,
    electionData,
    isElectionLoading,
    electionError,
    launchElectionMutate,
    confirmElectionDetailsMutate,
    confirmDetailsData,
    isNavigationActionLoading,
    navigationActionError,
    launchElectionData,
    navigate
  }
}

export default useLaunch;