const GOOGLE_API_KEY = "AIzaSyAg3ncczrXvtse3tUL_cBUiWSc63Cnxwq4";
const YOUTUBE_API_KEY = "AIzaSyBdCUftKiyg5WVkGAFVY5VW8Qn4DuJqc4s";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_SEARCH = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${GOOGLE_API_KEY}&q=`;
