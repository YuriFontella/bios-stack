import Head from 'next/head'

const Meta = (props) => (

  <Head>
    <title>{props.title}</title>
    <meta name="og:title" property="og:title" content={props.title} />

    <meta property="og:image" content={props.image} />
  </Head>
)

export default Meta