import { useRouter } from "next/router"
import { DocsThemeConfig, useConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: (
    <span>
      <b>use-cardano </b>

      <small>
        <i>v. 1.0.0-beta.1</i>
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
    link: "https://github.com/GGAlanSmithee/use-cardano",
  },
  // chat: {
  //   link: 'https://discord.com/use-cardano',
  // },
  docsRepositoryBase: "https://github.com/GGAlanSmithee/use-cardano-docs",
  footer: {
    text: "use-cardano",
  },
}

export default config
