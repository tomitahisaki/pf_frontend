import styles from "./Links.module.scss";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Docs →",
    description:
      "Find in-depth information about Next.js features and&nbsp;API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    description:
      "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  {
    href: "https://vercel.com/templates",
    title: "Templates →",
    description:
      "Discover and deploy boilerplate example Next.js&nbsp;projects.",
  },
  {
    href: "https://vercel.com/new",
    title: "Deploy →",
    description:
      "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.",
  },
];

export function Links() {
  return (
    <>
      <div className={styles.grid}>
        {ITEMS.map((item) => {
          return (
            <a
              key={item.href}
              href={item.href}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </a>
          );
        })}
      </div>
    </>
  );
}
