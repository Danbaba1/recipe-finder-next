import { notFound } from "next/navigation";
import { Suspense } from "react";
import { RECIPES, Recipe } from "../../../data/recipes";
import SaveButton from "../../components/SaveButton";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getRecipe(id: string): Promise<Recipe | undefined> {
  await wait(150);
  return RECIPES.find((recipe) => recipe.id === id);
}

async function RecipeList({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recipe = await getRecipe(id);
  if (!recipe) notFound();
  return (
    <>
      <h1>{recipe.name}</h1>
      <p>{recipe.minutes} minutes</p>
      <ul>
        {recipe.ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
      <SaveButton />
    </>
  );
}

export default function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<p>Loading recipes{"\u2026"}</p>}>
      <RecipeList params={params} />
    </Suspense>
  );
}
