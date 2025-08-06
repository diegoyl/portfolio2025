import { useEffect, useState } from 'react';

const redirects = {
    "beatfarm-web" : "https://diegoyl.github.io/beatfarm-web/",
    "birth-certificate" : "https://diegoyl.github.io/newspaper-birth-certificate/",
    "tactical-type" : "https://diegoyl.github.io/tactical-type/",
    "htmaa" : "https://fab.cba.mit.edu/classes/863.22/Architecture/people/Diego/",
    "splash-course" : "https://github.com/diegoyl/splash-course/blob/main/README.md",
    "golf" : "https://diegoyl.github.io/golf",
}

function ExternalRedirectPage() {
  var [urlText, setUrlText] = useState("")
  var url = ""

  useEffect(() => {
    let path = window.location.hash.slice(1);

    url = redirects[path]
    setUrlText(url)

    if (url) {
        window.location.href = url
    } else {
        window.location.href = "/"
    }
  },[])


  return (
    <div style={{fontSize:"40px",fontFamily:"PangramHeader", color:"var(--c-cream)", backgroundColor:"var(--c-blue)", height:"100vh", width:"100vw", position:"absolute"}}>
        <p style={{marginTop:"30vh"}}>Redirecting...</p>
        <a href={urlText} style={{textDecoration:"underline",color:"var(--c-cream)"}}>{urlText}</a>
    </div>
  );
}

export default ExternalRedirectPage;
