import { useRouter } from "next/router"
import { DocsThemeConfig, useConfig } from "nextra-theme-docs"
import packageJson from "package.json"

const config: DocsThemeConfig = {
  logo: (
    <span>
      <b>use-cardano </b>

      <small>
        <i>v. {packageJson.dependencies["use-cardano"]}</i>
      </small>
    </span>
  ),
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()

    const title = frontMatter.title ? `${frontMatter.title} - Use Cardano` : "Use Cardano"

    return (
      <>
        <title>{title}</title>

        <link rel="icon" href="/favicon.png" />
        <link rel="icon" href="/favicon.svg" />

        <meta property="og:url" content={`https://www.use-cardano.dev${asPath}`} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={frontMatter.description || "Makes building Cardano dApps easy."}
        />
      </>
    )
  },
  project: {
    link: "https://github.com/use-cardano/use-cardano",
  },
  // chat: {
  //   link: 'https://discord.com/use-cardano',
  // },
  docsRepositoryBase: "https://github.com/use-cardano/use-cardano-docs",
  footer: {
    text: "use-cardano",
  },
}

export default config
