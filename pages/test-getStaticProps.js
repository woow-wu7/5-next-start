// 静态生成
import styles from "./test-getStaticProps.module.scss";
import Link from "next/link";
import Layout from "../components/layout.js";
import { useSelector, useDispatch } from "react-redux";
import { add, addAsync } from "../store/counter";

const TestGetStaticProps = ({ data }) => {
  // console.log("data-TestGetStaticProps", data); // 在 client 和 server 端都会打印

  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log("count", count);

  const HandleDispatch = () => {
    dispatch(add(2));
  };

  const HandleDispatchAsync = () => {
    dispatch(addAsync(10));
  };

  return (
    <div className={styles.wrap}>
      <h1>Page: TestGetStaticProps</h1>
      <h3>environment variable: TEST_ENV：{process.env.TEST_ENV}</h3>
      <div>{data.info}</div>

      <br />

      <Link href="/test-getServerSideProps">
        <button style={{ color: "#1890ff" }}>
          link: test-getServiceSideProps
        </button>
      </Link>

      <br />
      <br />

      <Link href="/test-getInitialProps">
        <button style={{ color: "#1890ff" }}>link: test-getInitialProps</button>
      </Link>

      <main>
        <div>count: {count}</div>
        <button onClick={HandleDispatch}>dispatch sync count+2</button>
        <button onClick={HandleDispatchAsync}>dispatch Async count+10</button>
      </main>
    </div>
  );
};

TestGetStaticProps.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = async () => {
  // translate
  const url =
    "https://api.66mz8.com/api/translation.php?info=I come from China TestGetStaticProps";

  const res = await fetch(url);
  const data = await res.json();

  console.log("dataX", data); // 只在 server 端打印

  return {
    props: {
      data,
    },
  };
};

export default TestGetStaticProps;
