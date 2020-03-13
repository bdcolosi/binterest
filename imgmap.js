const imageData = ["https://film-grab.com/wp-content/uploads/2019/10/Florida-Man-034.jpg","https://film-grab.com/wp-content/uploads/2019/10/Buzzard-023.jpg","https://film-grab.com/wp-content/uploads/2019/10/Paddington-II-045.jpg","https://film-grab.com/wp-content/uploads/2019/10/Overlord-031.jpg","https://film-grab.com/wp-content/uploads/2019/10/Personal-Shopper-034.jpg","https://film-grab.com/wp-content/uploads/2019/10/Possum-038.jpg","https://film-grab.com/wp-content/uploads/2019/10/Dumbo-009.jpg","https://film-grab.com/wp-content/uploads/2019/09/Ant-Man-The-Wasp-034.jpg","https://film-grab.com/wp-content/uploads/2019/10/Someone-Great-027.jpg","https://film-grab.com/wp-content/uploads/2019/10/Okja-020.jpg","https://film-grab.com/wp-content/uploads/2019/11/Friday-the-13th-061.jpg","https://film-grab.com/wp-content/uploads/2019/11/Us-024.jpg","https://film-grab.com/wp-content/uploads/2019/09/Vox-Lux-035.jpg","https://film-grab.com/wp-content/uploads/2019/10/The-Man-Who-Killed-Don-Quixote-048.jpg","https://film-grab.com/wp-content/uploads/2019/10/Burning-040.jpg","https://film-grab.com/wp-content/uploads/2019/10/Under-The-Silver-Lake-021.jpg","https://film-grab.com/wp-content/uploads/2019/11/The-Long-Dumb-Road-019.jpg","https://film-grab.com/wp-content/uploads/2019/11/Blaze-023.jpg","https://film-grab.com/wp-content/uploads/2019/11/High-Life-060.jpg","https://film-grab.com/wp-content/uploads/2019/10/Cold-War-034.jpg","https://film-grab.com/wp-content/uploads/2019/10/Relaxer-023.jpg","https://film-grab.com/wp-content/uploads/2019/10/The-Dead-Dont-Die-041.jpg","https://film-grab.com/wp-content/uploads/2019/11/Guava-Island-013.jpg","https://film-grab.com/wp-content/uploads/2019/11/The-Perfection-051.jpg","https://film-grab.com/wp-content/uploads/2019/10/The-Devils-Doorway-017.jpg","https://film-grab.com/wp-content/uploads/2019/10/The-Favourite-027.jpg","https://film-grab.com/wp-content/uploads/2019/09/Wildlife-050.jpg","https://film-grab.com/wp-content/uploads/2019/10/Destroyer-011.jpg","https://film-grab.com/wp-content/uploads/2019/10/Venom-043.jpg","https://film-grab.com/wp-content/uploads/2019/10/A-Star-Is-Born-2018-008.jpg","https://film-grab.com/wp-content/uploads/2019/10/Damsel-012.jpg","https://film-grab.com/wp-content/uploads/2019/10/Black-47-039.jpg","https://film-grab.com/wp-content/uploads/2019/10/The-Other-Side-of-the-Wind-047.jpg","https://film-grab.com/wp-content/uploads/2019/10/Blindspotting-008.jpg","https://film-grab.com/wp-content/uploads/2019/11/Things-to-Come-030.jpg","https://film-grab.com/wp-content/uploads/2019/10/Let-The-Corpses-Tan-007.jpg","https://film-grab.com/wp-content/uploads/2019/10/I-Think-Were-Alone-Now-022.jpg","https://film-grab.com/wp-content/uploads/2019/11/The-War-of-the-Worlds-009.jpg","https://film-grab.com/wp-content/uploads/2019/09/Beasts-of-No-Nation-038.jpg","https://film-grab.com/wp-content/uploads/2019/11/07.jpg","https://film-grab.com/wp-content/uploads/2019/11/Coraline-015.jpg","https://film-grab.com/wp-content/uploads/2019/10/The-Old-Man-The-Gun-004.jpg","https://film-grab.com/wp-content/uploads/2019/10/Assassination-Nation-024.jpg","https://film-grab.com/wp-content/uploads/2019/11/Into-the-Spider-Verse-031.jpg","https://film-grab.com/wp-content/uploads/2019/11/Can-You-Ever-Forgive-Me-015.jpg","https://film-grab.com/wp-content/uploads/2019/11/The-Miseducation-of-Cameron-Post-043.jpg","https://film-grab.com/wp-content/uploads/2019/11/Shoplifters-036.jpg","https://film-grab.com/wp-content/uploads/2019/11/Mid-90s-041.jpg","https://film-grab.com/wp-content/uploads/2019/09/Widows-028.jpg","https://film-grab.com/wp-content/uploads/2019/10/Leave-No-Trace-046.jpg","https://film-grab.com/wp-content/uploads/2019/10/Hearts-Beat-Loud-032.jpg","https://film-grab.com/wp-content/uploads/2019/10/If-Beale-Street-Could-Talk-015.jpg","https://film-grab.com/wp-content/uploads/2019/10/Christopher-Robin-045.jpg","https://film-grab.com/wp-content/uploads/2019/10/Madelines-Madeline-036.jpg","https://film-grab.com/wp-content/uploads/2019/10/The-Ballad-of-Buster-Scruggs-036.jpg","https://film-grab.com/wp-content/uploads/2019/10/Halloween-2018-003.jpg","https://film-grab.com/wp-content/uploads/2019/10/Cam-053.jpg","https://film-grab.com/wp-content/uploads/2019/10/Hocus-Pocus-014.jpg","https://film-grab.com/wp-content/uploads/2019/10/The-Nun-038.jpg","https://film-grab.com/wp-content/uploads/2019/10/Resident-Evil-The-Final-Chapter-054.jpg"];
const db = require('./models/conn');
const imgModel = require('./models/imageModel');

let mapData = imageData.map (url => {
    imgModel.pushImg(url)
});
