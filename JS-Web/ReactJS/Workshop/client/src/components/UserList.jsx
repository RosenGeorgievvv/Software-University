import Search from "./Search";
import Table from "./Table";

const UserList = () => {
  return (
    <section className="card users-container">
      <Search />
      <Table />
      <button className="btn-add btn">Add new user</button>
    </section>
  );
};
export default UserList;
