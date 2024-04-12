const addClassOnHover = (el: HTMLElement, value: { className: string }) => {
    el.addEventListener('mouseover', () => {
        el.classList.add(value.className)
    })
    el.addEventListener('mouseleave', () => {
        el.classList.remove(value.className)
    })
}
const hover = {
    mounted: (el: HTMLElement, binding: { value: { className: string } }) =>{
        addClassOnHover(el, binding.value)
    }
}
export default hover