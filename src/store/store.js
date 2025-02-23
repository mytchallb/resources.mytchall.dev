import { atom } from "nanostores";

export const isSidebarOpen = atom(true);

export const selectedCategories = atom([]);
export const selectedTags = atom([]);
export const searchQuery = atom("");
export const sortBy = atom("category-asc");
export const selectedTheme = atom(0);

export const resetFilters = () => {
  selectedCategories.set([]);
  selectedTags.set([]);
  searchQuery.set("");
  sortBy.set("category-asc");
};
