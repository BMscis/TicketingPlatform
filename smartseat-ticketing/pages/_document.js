import Document, {Html,Head,Main,NextScript} from "next/document"

export default class CustomDocument extends Document {
    render () {
        return <Html>
            <Head>
                <link rel="icon" href="../images/logo.webp" type="image/gif" sizes="16x16"/>
                <meta content="text/html;charset=utf-8" httpquiv="Content-Type"/>
                <meta content="Gigaland - NFT Marketplace Website Template" name="description" />
                <meta content="" name="keywords" />
                <meta content="" name="author" />
                {/* <!-- CSS Files
                ================================================== -->
                <link id="bootstrap" href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
                <link href="css/plugins.css" rel="stylesheet" type="text/css" />    
                <link href="css/style.css" rel="stylesheet" type="text/css" />
                <!-- color scheme -->
                <link id="colors" href="css/colors/scheme-02.css" rel="stylesheet" type="text/css" />
                <link href="css/coloring.css" rel="stylesheet" type="text/css" /> */}
                <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
            </Head>
            <body>
                <Main></Main>
            </body>
            <NextScript/>
        </Html>
    }
}