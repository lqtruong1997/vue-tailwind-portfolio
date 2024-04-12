const displayTextCharByChar = (el: HTMLElement, stringList: string[], wordDisplayTime: number = 2000, charDisplayTime: number = 100) => {
    let len = 1;
    let shouldPlus = true;
    let poIndex = 0;
    let timeout: NodeJS.Timeout | null;
    setInterval(() => {
        if (el) {
            const text = stringList[poIndex].slice(0, len);
            if (len === stringList[poIndex].length) {
                if (!timeout) {
                    timeout = setTimeout(() => {
                        shouldPlus = false;
                    }, wordDisplayTime)
                }
            } else if (len === 0) {
                timeout = null;
                shouldPlus = true;
                poIndex = poIndex === stringList.length - 1 ? 0 : poIndex + 1;
            }
            (el as HTMLElement).innerHTML = text ? text : '&nbsp;';
            len = shouldPlus ? (len === stringList[poIndex].length ? len : len + 1) : (len === 0 ? 0 : len - 1);
        }
    }, charDisplayTime)
}
const textDisplay = {
    mounted: (el: HTMLElement, binding: { value: { stringList: string[], wordDisplayTime: number, charDisplayTime: number } }) =>{
        displayTextCharByChar(el, binding.value.stringList, binding.value.wordDisplayTime, binding.value.charDisplayTime)
    }
}
export default textDisplay