import NotFound from "./pages/Home.svelte";
import Home from "./pages/Home.svelte";
import Num from "./pages/Num.svelte";

export default {
  "/": Home,
  "/:num": Num,
  "*": NotFound,
};
