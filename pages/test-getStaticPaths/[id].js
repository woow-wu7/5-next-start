// 静态生成

const TestGetStaticPaths = ({ data }) => {
  return data.data.map((item, index) => (
    <div key={index}>
      <div>{item.days}</div>
      <div>{item.week}</div>
      <div>{item.temperature}</div>
    </div>
  ));
};

export const getStaticPaths = async () => {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "北京",
        },
        {
          id: 2,
          name: "杭州",
        },
      ]);
    }, 5000);
  });
  console.log("data", data);

  const paths = data.map((address) => ({
    params: {
      id: address.name,
    },
  }));

  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  console.log("params", params);
  const res = await fetch(
    `https://api.66mz8.com/api/weather.php?location=${params.id}`
  );
  const data = await res.json();
  console.log("data", data);
  return { props: { data } };
}

export default TestGetStaticPaths;
