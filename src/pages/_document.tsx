import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render () {
        return (
            <Html>
                <Head>

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                    href="https://fonts.googleapis.com/css2?family=Ropa+Sans&family=Rochester&family=Rum+Raisin&family=Saira+Condensed&display=swap"
                    rel="stylesheet"
                    />
                </Head>
                <body>
                    {/* Main onde vai ficar nossa aplicação */}
                    <Main /> 
                    <NextScript />
                </body>
            </Html>
        )
    }
}