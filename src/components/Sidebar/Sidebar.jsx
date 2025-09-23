import SearchBar from "./SearchBar";
import Categories from "./Categories";
import PopularPosts from "./PopularPosts";
import PopularTags from "./PopularTags";

const Sidebar = () => {
  return (
    <div className="w-full lg:w-80">
      <SearchBar />
      <Categories />
      <PopularPosts />
      <PopularTags />
    </div>
  );
};

export default Sidebar;
