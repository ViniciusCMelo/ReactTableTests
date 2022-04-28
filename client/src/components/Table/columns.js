const filterCountry = (rows, id, filterValue) => {
  rows.filter((row) => row.original.country === filterValue)
}

const filterSeller = (rows, id, filterValue) => {
  rows.filter((row) => row.original.seller === filterValue)
}
export const Columns = [
  {
    Header: "Order Id",
    accessor: "orderId",
  }, {
    Header: "Product",
    accessor: "product",
  }, {
    Header: "Seller",
    accessor: "seller",
    Filter: filterSeller,
    filter: "equals"
  }, {
    Header: "Country",
    accessor: "country",
    Filter: filterCountry,
  }, {
    Header: "Price",
    accessor: "price",
  },
]