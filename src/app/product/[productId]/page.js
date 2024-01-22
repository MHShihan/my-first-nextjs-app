const DynamicPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1>I am from dynamic page: {params.productId}</h1>
      <h2>Searched Category: {searchParams.category}</h2>
      <h2>Searched Price: {searchParams.price} taka</h2>
    </div>
  );
};

export default DynamicPage;
