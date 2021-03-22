import Alert from '../alert'
import Footer from '../footer'
import Headers from '../Header/index'
import Meta from '../meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Headers />
      <div className="min-h-screen">
        <main className="max-w-6xl mx-auto py-2 sm:px-2 lg:px-2">
          {/* 填充物 */}
          <div className="flex mt-16 mb-16 md:mb-12"></div>
          {children}
         </main>
      </div>
      <Footer />
    </>
  )
}
