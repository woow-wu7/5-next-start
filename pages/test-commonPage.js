// 静态生成

import Layout from "../components/layout.js";

const TestCommonPage = () => {
  return (
    <div>
      <h1>Page: TestCommonPage</h1>
    </div>
  );
};

TestCommonPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default TestCommonPage;
