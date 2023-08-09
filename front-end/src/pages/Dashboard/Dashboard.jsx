import React from "react";
import { useState } from "react";
import ElectionList from "./components/ShowElections/ElectionList";
import AddElection from "./components/AddElection/AddElection";
import Header from "../../components/Header/Header";
import PageLayout from "../../components/PageLayout/PageLayout";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";


const Dashboard = () => {

  const [showModal, setShowModal] = useState(false);

  const handleNewElectionClick = () => {
    setShowModal(!showModal);
  };

  return (
    <PageLayout>
      <Header isDashboard={false} />
      <header className="bg-white shadow py-6">
        <Container>
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Dashboard
              </h1>
            </div>
            <div onClick={handleNewElectionClick}>
              
              <Button className="text-md" variant={"primary"}>
                New Election
              </Button>
            </div>
          </div>
        </Container>
      </header>
      <main>
        <AddElection showModal={showModal} setShowModal={setShowModal} />
        <div className="py-6" >
          <Container>
            <ElectionList showModal={showModal} />
          </Container>
        </div>
      </main>
    </PageLayout>
  );
};

export default Dashboard;
