// 静态生成
import styles from "./test-getStaticProps.module.scss";
import Link from "next/link";
import Layout from "../components/layout.js";

const TestGetInitialProps = ({ data }) => {
  // console.log("data2", data); // 在 client 和 server 端都会打印

  return (
    <div className={styles.wrap}>
      <h1>Page: TestGetInitialProps</h1>
      <Link href="/test-getServerSideProps">
        <button style={{ color: "#1890ff" }}>
          link: test-getServiceSideProps
        </button>
      </Link>
    </div>
  );
};

TestGetInitialProps.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};

TestGetInitialProps.getInitialProps = async () => {
  const url =
    "https://api.66mz8.com/api/translation.php?info=I come from China";

  const res = await fetch(url);
  const data = await res.json();

  console.log("dataY", data); // 只在 server 端打印

  return {
    data,
  };
};

export default TestGetInitialProps;
