// 静态生成
import styles from "./test-getStaticProps.module.scss";
import Link from "next/link";
import Layout from "../components/layout.js";

export const getStaticProps = async () => {
  // translate
  const url =
    "https://api.66mz8.com/api/translation.php?info=I come from China";

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};


const TestGetStaticProps = ({ data }) => {
  return (
      <div className={styles.wrap}>
        <h1>Page: TestGetStaticProps</h1>
        <h3>environment variable: TEST_ENV：{process.env.TEST_ENV}</h3>
        <div>{data.info}</div>
        <Link href="/test-getServerSideProps">
          <button style={{ color: "#1890ff" }}>
            link: test-getServiceSideProps
          </button>
        </Link>
      </div>
  );
};

TestGetStaticProps.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};

export default TestGetStaticProps;
