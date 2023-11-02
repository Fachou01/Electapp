import Card from "../../../components/Card/Card";
import Container from "../../../components/Container/Container";
import PageLayout from "../../../components/PageLayout/PageLayout";
import useVoterBallot from "./logic/useVoterBallot";

const VoterBallot = () => {

  const { election } = useVoterBallot();

  const Questions = () => {
  }

  return (
    <PageLayout>
      <main className="py-6">
        <Container>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl pb-5">Welcome To Voting Panel</h1>
            <h2 className="text-xl">Election: {election.title}  </h2>
          </div>
        </Container>

      </main>
    </PageLayout>
  )
}
export default VoterBallot;