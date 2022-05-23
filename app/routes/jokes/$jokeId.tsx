// dynamic route
// /jokes/:jokeid
import { Link, useLoaderData } from '@remix-run/react';
import { json, LoaderFunction } from '@remix-run/node';
import { db } from '~/utils/db.server';
import { Joke } from '@prisma/client';

type LoaderData = {
  joke: Joke;
};
// get params
export const loader: LoaderFunction = async ({ params }) => {
  // console.log(params);
  const joke = await db.joke.findUnique({
    where: { id: params.jokeId },
  });
  if (!joke) {
    throw new Error('Joke not found');
  }
  const data: LoaderData = { joke };
  return json(data);
};

export default function JokeRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{data.joke.content}</p>
      <Link to='.'>{data.joke.name}</Link>
    </div>
  );
}
