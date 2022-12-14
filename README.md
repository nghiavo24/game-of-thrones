# Game of Thrones - Project Overview

## Project Description

The app is created for fans to search for related information about the show, such as: the cast members, episodes, and etc. It is also created for fan to join the discussion by posting online comment or subscribe to the newsletter.

## Project Links

- [Github Repo](https://github.com/nghiavo24/game-of-thrones)
- [Deployment Site](https://game-of-thrones-nu.vercel.app/)
- [Demo Recording](https://youtu.be/tyeAdyQTPDM)

## Wireframes & React Component Hierarchy
**- Wireframes:**
- **Before**
<img src="https://i.imgur.com/zP3fQea.png">

- **After**
<img src="https://i.imgur.com/a9jOvcp.png">

**- React Component Hierarchy:**

- **Before**

<img src="https://i.imgur.com/ThQPlgo.png">

- **After**

<img src="https://i.imgur.com/yhK9n8S.png">


### MVP/PostMVP

#### MVP (✅ completed)

- [x] AAU, I want to be able to browse any houses or characters. 
- [x] AAU, I want to be able to see the picture of any house or characters.
- [x] AAU, I want to be able to click on any house or characters and click on it to find out more details about it.
- [x] AAU, I want to be able to get a famous quote from any characters if available. 

#### Post-MVP ( ❗- not completed, ✅ completed)
- [ ] Add a search component so they can find a specific house or character.
- [ ] Add OST as background music.
- [ ] Add a create new component so you can create your own house and characters with their famous quotes.
- [x] Added a comment component so users can post comment and interact with other users.
- [x] Added a subscribe component so users can register their email address to get monthly news.

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.


| Component | Description | 
| --- | :---: |  
| App | This will rendered the homepage, including the Navbar & subscribe button.| 
| About | This initializes an API call and render information the about the show section.  | 
| Characters | This initializes an API call and render information the about the characters section, including external links to other websites. | 
| CommentBox | This stores list of comments posted and allow users to post new comments.  | 
| Episodes | This initializes an API call and render information the about the show's episodes, including external links to other websites. | 
| Homepage | This contains a picture with hover effect and to be rendered as a homepage in App component. | 
| Houses | This initializes an API call and render information the about the show's houses, including internal links to the HouseDetails component.  | 
| House Details | The information is passed down from Houses component and to be filtered and returned with a matched house and display only that house information.  | 
| Quote | This initializes an API call and render information the about the show characters' quotes, including a button to generate a new quote whenver it is clicked. | 
| Subscribe | This will pop up a small window for users to enter their email address to received monthly news about the show.  | 


## Time Frames


| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: 
| Planning | H | 3hrs| 9hrs |
| Working with API | H | 3hrs| 2.5hrs |
| Adding Components| H | 8hrs| 12hrs |
| Adding new feature (comment & subscribe) | L | 4hrs| 10hrs |
| Code Revision | L | 2hrs| 1.5hrs |
| Debugging | M | 2hrs| 1.5hrs |
| Deploying | H | 1hrs| 0.5hrs |
| Documentation | M | 3hrs| 2hrs |
| Demo video | L | 1hrs| 1.5hrs |
| Total | H | 27hrs| 40hrs |

## Additional Libraries

 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width=10% height=10%><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width=10% height=10%> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" width=10% height=10%><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" width=10% height=10%>
- Axios
- Vercel

## Code Snippet

Conditional rendering - I am glad that I finally be able to understand a bit of it and ultilize this awesome function throughout my project.

```
{emailSend && <div className='email-container-sent'>
            <img className='sent-email-img' src={received} style={{ height: '15vh'}}/>
            <h3>Email Received!</h3>
        </div>
}
```


**ERROR**: Error: Each child in a list should have a unique key prop                              
**RESOLUTION**: Add a unique key to your list components.

**ERROR**: Error: Invalid hook call. Hooks can only be called inside of the body of a function component.                            
**RESOLUTION**: Put the hook inside a React function.

**ERROR**: TypeError: Cannot read property 'location' of undefined                             
**RESOLUTION**: Most of the time are typos.

## Additional resources:

- **Help with markdown language**
https://www.markdownguide.org/extended-syntax/#task-lists
- **Color Palettes**
https://coolors.co/palettes/trending
- **Pictures, wallpapers**
https://wall.alphacoders.com/big.php?i=1260061
- **Font**
https://fonts.google.com/about
- **Help with favicon**
https://www.w3schools.com/html/html_favicon.asp
- **Style background picture**
https://css-tricks.com/perfect-full-page-background-image/
- **Debugging help**
https://react.school/debugging/errors
- **Animated icon**
https://lottiefiles.com/
- ***API resources***
https://api.tvmaze.com/
https://agotapi.herokuapp.com
https://api.gameofthronesquotes.xyz/



