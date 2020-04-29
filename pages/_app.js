import { DefaultSeo } from 'next-seo'

// Only import what we need
import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/container.css'
import 'semantic-ui-css/components/divider.css'
import 'semantic-ui-css/components/grid.css'
import 'semantic-ui-css/components/header.css'
import 'semantic-ui-css/components/icon.css'
import 'semantic-ui-css/components/image.css'
import 'semantic-ui-css/components/menu.css'
import 'semantic-ui-css/components/list.css'
import 'semantic-ui-css/components/reset.css'
import 'semantic-ui-css/components/segment.css'
import 'semantic-ui-css/components/sidebar.css'
import 'semantic-ui-css/components/site.css'
import 'semantic-ui-css/components/table.css'
import '../public/styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_UK',
          url: 'https://banmanagement.com/',
          site_name: 'Ban Management'
        }}
        titleTemplate='%s | Ban Management'
      />
      <Component {...pageProps} />
    </>)
}
