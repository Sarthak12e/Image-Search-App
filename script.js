const accessKey="ad98GU2aup0_X0SV9a3S_KY7x5HsWeWjaknYmnwWU7Y";

//const accessKey="aEfn8IKe4XkMecE4Sir8r2Y2Ocv6_m1vfODHH2RCacs";

const formE1=document.querySelector("form");
const inputE1=document.getElementById("search-input");
const searchResults= document.querySelector(".search-results");
const showMore= document.getElementById("show-more-button");

let inputData="";
let page=1;

async function searchImages()
{
    inputData=inputE1.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response= await fetch(url);
    const data= await response.json();

    const results=data.results;

    if(page===1){
        searchResults.innerHTML="";
    }

    results.map((result)=>{
       const ImageWrapper=document.createElement("div");
       ImageWrapper.classList.add("search-result");
       const Image=document.createElement("img");
       Image.src=result.urls.small;    //urls maybe
       Image.alt=result.alt_description;
       const ImageLink=document.createElement("a");
       ImageLink.href=result.links.html;
       ImageLink.target="_blank";
       ImageLink.textContent=result.alt_description;

       ImageWrapper.appendChild(Image);
       ImageWrapper.appendChild(ImageLink);
       searchResults.appendChild(ImageWrapper);

    });

    page++;

    if(page>1){
    showMore.style.display="block";
    }

}

    formE1.addEventListener("submit",(event)=>{
        event.preventDefault();
        page=1;
        searchImages();
    });

    showMore.addEventListener("click", ()=>{
        searchImages();
    });

