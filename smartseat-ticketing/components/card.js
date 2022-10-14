export default function walletCard({walletProps}){
    const {popularity,walletName,img,subtitles} = walletProps
    return (
        <div class="col-lg-3 mb30">
        <a class="box-url" href="login.html">
            <span class="box-url-label">Most Popular</span>
            <img src="images/wallet/1.png" alt="" class="mb20"/>
            <h4>Metamask</h4>
            <p>Start exploring blockchain applications in seconds.  Trusted by over 1 million users worldwide.</p>
        </a>
    </div>
    )
}