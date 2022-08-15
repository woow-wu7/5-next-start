// 静态生成

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
    <div>
      <div>{data.info}</div>
    </div>
  );
};

export default TestGetStaticProps;
