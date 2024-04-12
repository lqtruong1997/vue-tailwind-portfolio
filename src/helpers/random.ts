export function getRandomColorName () {
    const colors = ['red', 'orange', 'green', 'yellow', 'blue', 'indigo', 'pink', 'purple'];
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    return randomColor;
}