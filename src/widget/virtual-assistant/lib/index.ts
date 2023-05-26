const imageUrl =
    'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=none&eyebrowType=Default&mouthType=none&skinColor=Light';

const imageUrl2 =
    'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=CollarSweater&eyeType=none&eyebrowType=Default&mouthType=none&skinColor=Light';

const imageUrl3 =
    'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Gray01&eyeType=none&eyebrowType=Default&mouthType=none&skinColor=Light';

const imageUrl4 =
    'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&clotheColor=Gray01&eyeType=none&eyebrowType=Default&mouthType=none&skinColor=Light';

const URLS = [imageUrl, imageUrl2, imageUrl3, imageUrl4];

export const axiosGet = () => {
    const index = Math.floor(Math.random() * URLS.length - 0.01);
    return URLS[index];
};
