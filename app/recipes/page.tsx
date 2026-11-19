import Link from "next/link";
import { Suspense } from "react";
import { RECIPES, Recipe } from "../../data/recipes";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Server-only data functions. In a real app they'd read a database.
async function getRecipes(): Promise<Recipe[]> {
  await wait(150);
  return RECIPES;
}

async function RecipeList() {
  const recipes = await getRecipes(); // runs on the server
  return (
    <ul>
      {recipes.map((r) => (
        <li key={r.id}>
          <Link href={`/recipes/${r.id}`}>{r.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function RecipesPage() {
  return (
    <Suspense fallback={<p>Loading recipes{"\u2026"}</p>}>
      <RecipeList />
    </Suspense>
  );
}
