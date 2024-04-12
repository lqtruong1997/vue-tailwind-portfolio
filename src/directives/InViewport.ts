const visibleAndAddClassInViewport = (el: HTMLElement, value: { className: string }) => {
    el.className += ' invisible'
    if (value.className) {
        const options = {
            threshold: 0
        }
        const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.replace('invisible', 'visible')
                entry.target.classList.add(value.className)
            } else {
                entry.target.classList.replace(value.className, 'visible')
                entry.target.classList.add('invisible')
            }
        })
        }, options)
        observer.observe(el)
    }
}
const inViewport = {
    mounted: (el: HTMLElement, binding: { value: { className: string } }) =>{
        visibleAndAddClassInViewport(el, binding.value)
    }
}
export default inViewport