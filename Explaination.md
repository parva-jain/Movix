Installed the necessary packages, retrieved API token of TMDB API. Index.scss mai kuch predefined styling code paste kiya. App mai use hone wale photos, logos ko assets folder m paste kiya.

utils folder create krke api call ka code likha api.js mai. Tested api with an endpoint.

One first task is to set up redux store using react-redux docs. Tested working of redux slices and store using the test api call which fetched popular movie urls and save it in redux state using dispatch methhod called over a reducer function. Then tested the useSelector hook by fetching state from redux. Also added the redux devtool extension in browser to check working of redux.

Now started creating pages. Decided and made folder for various pages and components and added their routes in app.js

Now will start with building home page...

Started with hero banner, set up two states for random background image and search query. Using useNavigate hook to navigate to different route on search of a query. Also used an event onKeyUp in search input which triggers an event handler searchQueryHandler.

Creating a custom hook for doing api call coz its going to be a repetetive task.

Used useSelector for fetcing redux state. Fetching background image url prefix from url state of redux.

Now using useEffect hook to update baackground url state by concatenating parts from useSelector state and data from useFetch hook.

After getting the bg image url, startes writing the html and scss for herosection.

Now starting with header...

Header section will have diff icons for differnt views(mobile and desktop) which is handled through states and conditional classes.

For handling the effect of navbar, we r using state show which can take value top, show and hide which are classes with css properties defined.

Using useEffect hook to add an event listener on scroll event. Always make sure to remove event after a component is unmounted.

Written logic to change navbar classes on the basis of scroll amount. Also whenever location changes(we r navigated to some other route), set scroll to 0.

Added the footer jsx and css code which is simple static part.

Now moving on to the carousel section. Started with coding the trending section which displays all the trending movies and shows. It also has functionality for showiing daily trendings or weekly trending. Wrote logic for hitting diff endpoint for fetching data on the basis of active tab(day or week)

Now coding the body of carousel section. Usinf useRef react hook whihc is used to select any node/component from the dom.

Coded different components for a movie card in carousel section like circlRating and genre tags. We are getting ids of genres for a particular movie/show so to get the genre tag, we are fetching all the genres and saving it in redux store in the app.jsx file. Doing it for tv shows and movies usinf the promise.all method.

Now for adding the scroll effect on left/right arrow click, we r creating a navigation method which takes the ref of the carousel div(selected using useRef hook), and scroll it by an amount calculated using that div only using scrollTo js method.

Similarly created components for upcoming and popular section.

Now will start working on movie/tv show details page.
First step is to hit the api for getting the details of particular movie/tv show.

Api call will require media type and id for fetching the details. For getting these, we will use useParams hook.

Details page is divided into multiple components. One is details banner component.

For getting the cast and videos, we need to do another api call which we r doing in detials.jsx and passing the data as prop to detailsbanner.jsx.

Other components of details page are simple like casts, videos, similar and recommended carousels.

Next page will be search result page. It will also call an API for finding data according to search. We will use react-infinte-scroll library as well.

The api for query search also takes page no. as parameter for giving the response. So we are writing two functions, one for fetchingInitialData and one for fetching next page data. When fetching data from next page, we have to make sure that previous data from the state is also present in the state along with the next page data.

Similar will create the explore page which is quite similar, the only differenve is the filter options in explore pages.
