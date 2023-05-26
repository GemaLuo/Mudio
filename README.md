# [MUDIO](https://mudio-enjoy-music.web.app/)	:musical_note:
##### [中文](./README-ZH_CN.md) | English

### Catalog

- [Introduce](#Introduce)
- [DEMO](#DEMO)
  + [Test Account](#Test-Account)
- [Stack](#Stack)
- [Features](#Features)
- [Contact](#Contact)


##  Introduce

MUDIO is a music website inspired by Spotify, aiming to provide users with a rich music experience. Users can enjoy classical music on various devices, search users' favorite song by keyword , and create personalized playlists through the membership system.

![introduce_pic](/images/readme-pic.png)


## DEMO

https://mudio-enjoy-music.web.app/


##### Test Account
MUDIO requires login to create personalized playlists. The following is the test account and password.

| Account | Password |
|-------|-------|
| user@user.com | user123 |

## Stack

![Stack](/images/tool.png)

## Features

#### :play_or_pause_button: Play / Pause
After entering the homepage, click on the play button to play the music stored in Firebase Storage.
<video controls>
  <source src="/video/playandpause.mp4" type="video/mp4">
</video>

#### Drag the progress bar
While playing music, the progress bar and current time changes in sync with the song's playback. You can also drag the progress bar to change the song's playback progress.
<video controls>
  <source src="/video/footer進度條.mp4" type="video/mp4">
</video>

#### :arrow_forward::arrow_backward: Next/Prev
While playing the default music which shows on homepage, you can click the previous button and next tracks button according to your preferences.
<video controls>
  <source src="/video/nextandprev.mp4" type="video/mp4">
</video>


#### :twisted_rightwards_arrows: Random
After clicking the random icon, the tracks will be played randomly.
<video controls>
  <source src="/video/randomfunction.mp4" type="video/mp4">
</video>

#### :mag: Search Function
After clicking the search option in the left-side menu, you can enter keywords in the search box to find tracks in albums. And you can simply click on the track to play it directly.
<video controls>
  <source src="/video/search.mp4" type="video/mp4">
</video>

#### :heavy_plus_sign: Personal Playlist
After clicking the "Create Playlist" option in the left-side menu, a form will pop up in the center of the screen. Fill in the required information and submit the form. The information and photo will be saved to Firebase's Firestore Database. Once the upload is successful, you can go to the "Your Music Library" option in the left-side menu to find the created playlists and view their detailed content.
<video controls>
  <source src="/video/addplaylist.mp4" type="video/mp4">
</video>


#### :loud_sound: Volume control
In the desktop version, you can click the volume button in the bottom-right corner to adjust the volume level.
<video controls>
  <source src="/video/volume.mp4" type="video/mp4">
</video>

#### :bust_in_silhouette: Member Page
By clicking the user profile picture in the top-right corner and selecting the "Profile" option, you can browse the data and profile picture that the user created during registration.
<video controls>
  <source src="/video/memberpage.mp4" type="video/mp4">
</video>

#### Album and Artist Page
Whether you click into an album or an artist section, you will find relevant information and tracks listed for users to reference and listen to.
<video controls>
  <source src="/video/albumandartist頁面.mp4" type="video/mp4">
</video>


#### :iphone: Responsive Web Design
The responsive page design ensures an optimal user experience for users on tablets and mobile devices as well.
<video controls>
  <source src="/video/RWD.mp4" type="video/mp4">
</video>


## Contact
:woman_technologist: Gema Luo<br>
:email: gemaluowenjun@gmail.com

