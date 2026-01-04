export default function Filters({
  search,
  setSearch,
  category,
  setCategory,
  setSort,
  clearFilters
}){
    return (
        <div className="filters">
        <input
            placeholder="Search product"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />

        <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
        </select>

        <select onChange={e => setSort(e.target.value)}>
            <option value="">Sort</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
        </select>

        <button onClick={clearFilters}>Clear</button>
        </div>
    );
}
