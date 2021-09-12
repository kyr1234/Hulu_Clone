const API_KEY='49d9deaba4d091ce4952dfe3bc5d98ef';

export const request={
  fetchTrending:`/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/rating?api_key=${API_KEY}&language=en-US`,
      fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
        fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
          fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
           fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
            fetchMystery:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
             fetchSciFi:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
              fetchWestern:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
 fetchAnimation:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTV:`/rated/tv/episodes?api_key=${API_KEY}&language=en-US&sort_by=created_at.asc&page=1`,

};