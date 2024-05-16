import { useAppStore } from "../stores/useAppStore";

const IndexPage = () => {

  const{categories}=useAppStore()
  return (
    <>
      <h1>index</h1>
    </>
  );
};

export default IndexPage;
