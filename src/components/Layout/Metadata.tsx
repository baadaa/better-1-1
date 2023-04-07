import Head from 'next/head';

export const Metadata = ({
  title = '',
  description = '',
  ogImage = '',
  favicon = '',
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />

    <meta name="og:title" content={title} />
    <meta name="og:type" content="website" />
    <meta name="og:image" content={ogImage} />
    <meta name="og:description" content={description} />

    <meta name="twitter:title" content={title} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="Bumhan Yu<bumhan.yu@gmail.com>" />
    <meta name="twitter:description" content={description} />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href={favicon} />
  </Head>
);
