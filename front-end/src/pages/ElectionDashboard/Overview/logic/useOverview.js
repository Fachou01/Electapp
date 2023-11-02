import { useContext } from 'react';
import ElectionDashboardService from '../../logic/electionDashboardService';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ElectionContextApp } from '../../../../utils/contexts/ElectionContext';

const useOverview = () => {

  // const {id: electionId} = useParams();

  const { election } = useContext(ElectionContextApp);

  const { isLoading, error, data } = useQuery(
    ["electionStats", election?.id],
    () => ElectionDashboardService.getElectionStats(election?.id),
    { enabled: election && true }
  );

  return {
    isLoading,
    error,
    data,
    election
  }
}

export default useOverview;