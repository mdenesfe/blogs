import { allPosts, Post } from "contentlayer/generated";
import { format, formatDistanceToNowStrict, parseISO } from "date-fns";
import { Mdx } from "@/components/mdx";
import { tr } from "date-fns/locale";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import BaseLink from "@/components/link";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: Props["params"];
}) {
  const Post = allPosts.find((Post: Post) => Post.slug === params.slug) as Post;

  return {
    title: Post.title,
    description: Post.subtitle,
  };
}

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allPosts.map((Post) => ({
    slug: Post.slug,
  }));
}

async function getPostCommits(filePath: string) {
  const res = await fetch(
    `https://api.github.com/repos/mdenesfe/blogs/commits?path=${filePath}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKENS}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function BlogPost({ params }) {
  const Post: Post = allPosts.find(
    (Post: Post) => Post.slug === params.slug
  ) as Post;

  if (!Post) {
    notFound();
  }

  const data = await getPostCommits(Post._raw.sourceFilePath);

  return (
    <Container>
      <article className="Post">
        <header>
          <h1 className="shine text-2xl font-semibold">{Post.title}</h1>
          <h2 className="mt-2 text-xl">{Post.subtitle}</h2>

          <div className="mt-10 flex items-center space-x-2 opacity-60">
            <time dateTime={Post.date}>
              {format(parseISO(Post.date), "d LLLL yyyy", {
                locale: tr,
              })}
            </time>
            <span>·</span>
            <span>{Post.readingTime.text}</span>
          </div>
        </header>

        <Mdx code={Post.body.code} />

        <div className="mt-20 divide-y rounded border dark:divide-zinc-800 dark:border-zinc-800">
          {data.map((c) => (
            <BaseLink
              key={c.node_id}
              href={c.html_url}
              className="flex px-2 py-3 text-sm"
            >
              <span className="grow">{c.commit.message}</span>
              <span>
                {formatDistanceToNowStrict(parseISO(c.commit.committer.date), {
                  addSuffix: true,
                  locale: tr,
                })}
              </span>
            </BaseLink>
          ))}
        </div>
      </article>
    </Container>
  );
}
