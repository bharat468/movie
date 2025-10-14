let trendingsection = document.querySelector(".trendingsection");
let popularsection = document.querySelector(".popularsection");
let topratedsection = document.querySelector(".topratedsection");
let trendingMoviesDaybtn = document.querySelector("#trendingMoviesDay")
let trendingMoviesweekbtn = document.querySelector("#trendingMoviesWeek")
let popularMoviesbtn = document.querySelector("#popularMovies")
let popularTvshowsbtn = document.querySelector("#popularTvshows")
let topRatedMoviesbtn = document.querySelector("#topRatedMovies")
let topRatedTvshowsbtn = document.querySelector("#topRatedTvshows")



const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE3ZTdkYjc3NzFkN2VhNjZhMWU1MjNjNDdkNjdlNSIsIm5iZiI6MTc2MDMzNTM3OC4wNDcwMDAyLCJzdWIiOiI2OGVjOTYxMjhjM2M5MDQ0NGY5ZGVhODYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.sSGrXplnrP_ocye3XQU7JB8Yg16cz8jh9eSp1Uqpjv0'
    }
}

// let arr = [];
let API = {
    trendingMovieday: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    trendingMoviesweek: "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
    popularMovie: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    popularTvshows: "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    topratedMovie: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    topRatedTvshows: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
}

window.addEventListener("load", () => {
    fetchUrl(API.trendingMovieday, trendingsection)
})

let basicUrl = "https://image.tmdb.org/t/p/w500"


async function fetchUrl(url, section) {

    // await DisplayPrint(url.trendingMovieday, trendingsection)
    // await DisplayPrint(url.popularMovie, popularsection)
    // await DisplayPrint(url.topratedMovie, topratedsection)

    let responce = await fetch(url, options)
    let result = await responce.json()
    section.innerHTML = ""
    DisplayPrint(result.results, section)
}




async function DisplayPrint(movieimage, section) {
    movieimage.forEach(e => {
        let div = document.createElement("div")
        div.classList.add("div")
        let img = document.createElement("img")
        img.classList.add("image")
        let name = document.createElement("h3")
        name.innerHTML = e.title || e.name
        let image = basicUrl + e.poster_path
        img.src = image
        div.append(img, name)
        section.append(div)
    });
}

trendingMoviesDaybtn.addEventListener("click", () => {
    fetchUrl(API.trendingMovieday, trendingsection)
})

trendingMoviesweekbtn.addEventListener("click", ()=>{
    fetchUrl(API.trendingMoviesweek, trendingsection)

})

popularMoviesbtn.addEventListener("click", () => {
    fetchUrl(API.popularMovie, popularsection)
})

popularTvshowsbtn.addEventListener("click", () => {
    fetchUrl(API.popularTvshows, popularsection)
})

topRatedMoviesbtn.addEventListener("click", () => {
    fetchUrl(API.topratedMovie, topratedsection)
})

topRatedTvshowsbtn.addEventListener("click", () => {
    fetchUrl(API.topRatedTvshows, topratedsection)
})



// DisplayPrint()



// for (let x in url) {
//     let fetchkey = url[x]
//     let responce = await fetch(fetchkey, options)
//     let result = await responce.json()
//     // arr.push(result.results)
//     console.log(result);


//     for (let i = 0; i < result.results.length; i++) {
//         // let parent = document.createElement("div")
//         // parent.classList.add("parent")
//         // console.log(result);
//         let div = document.createElement("div")
//         div.classList.add("div")
//         let img = document.createElement("img")
//         img.classList.add("image")
//         let name = document.createElement("h3")
//         name.innerHTML = result.results[i].title
//         let image = basicUrl + result.results[i].poster_path
//         img.src = image
//         div.append(img, name)
//         trendingsection.append(div)
//         // parent.append(div)
//     }
// }

