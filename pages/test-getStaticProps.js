const TestGetStaticProps = ({ data }) => {
  return <div>{data.info}</div>;
};

export const getStaticProps = async () => {
  // translate
  const url =
    "https://api.66mz8.com/api/translation.php?info=I come from China";

  const res = await fetch(url);
  const data = await res.json();
  console.log("data: ", data);

  return {
    props: {
      data,
    },
  };
};

export default TestGetStaticProps;
