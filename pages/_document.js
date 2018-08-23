import Document, { Head, Main, NextScript } from 'next/document';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// FIXME: NO SSR
const DynamicComponentWithNoSSR = dynamic(
  import('../components/hello3'),
  { ssr: false }
)

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <body>
          <Main />
          <div>
            <hr />
            <h3> NO SSR </h3>
            <DynamicComponentWithNoSSR />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
